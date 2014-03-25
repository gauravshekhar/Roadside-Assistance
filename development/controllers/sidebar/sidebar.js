angular.module('app.sidebar', 
[

])


.controller('SidebarController', ['$scope', '$http', '$location', 'Common', 'Cache', function($scope, $http, $location, Common, Cache)
{
	$scope.partnerTriangleClicked = function(partners, partner, event)
	{
		var $triangle =  ($(event.target).hasClass('triangle-wrapper')) ? $(event.target).find('div') : $(event.target);

		$('#side-partners .level1').each(function()
		{
			$(this).removeClass('open');
			$(this).addClass('closed');
		});

		if(partner.primaryNavigations.length > 0)
		{
			partner.primaryNavigations = [];
			return true;
		}

		$.each(partners, function()
		{
			this.primaryNavigations = [];
		});		

		$triangle.removeClass('closed');
		$triangle.addClass('open');

		$http(
		{
			url: (Common.online()) ? 'menu?partnerId=' + partner.id : 'jsons/menuItems.json',
			method: "GET"
		})
		.success(function (data, status, headers, config) 
		{
			$.each(data, function()
			{
				if(this.primaryNavId === this.secondaryNavId)
				{
					partner.primaryNavigations.push(this);
				}
			});
		})
		.error(function (data, status, headers, config) 
		{

		});
	};


	$scope.searchError = false;

	$scope.search = function()
	{
		var query, input, partners, topic;

		input = $.trim($('#search-input').val());
		partners = $.trim($('#search-partners').val());
		topic = $.trim($('#search-topic').val());

		if(input || partners || topic)
		{
			query = '/search/1/';

			query += (input) ? input + ' ' : '';
			query += (partners) ? partners + ' ' : '';
			query += (topic) ? topic + ' ' : '';
			
			query = $.trim(query);
			query = query.replace(/ /g, '+');
			query = query + '/';
			
			$scope.searchError = false;
			$location.path(query);
		}
		else
		{
			$scope.searchError = true;
		}
	};

	
	$scope.getPartners = function()
	{
		Common.showLoading();

		$http(
		{
			url: (Common.online()) ? 'partners' : 'jsons/partnersFull.json',
			method: "GET"
		})
		.success(function (data, status, headers, config) 
		{
			Common.hideLoading();

			$scope.allPartners = $scope.formatResponse(data.allPartners);
			$scope.userPartners = $scope.formatResponse(data.userPartners);

			if($scope.userPartners.length === 0)
			{
				$scope.showModal();
			}
			else
			{
				if($scope.userPartners !== Cache.userPartners)
				{
					angular.copy($scope.userPartners, Cache.userPartners);
				}

				if($scope.allPartners !== Cache.allPartners)
				{
					angular.copy($scope.allPartners, Cache.allPartners);
				}
			}
		})
		.error(function (data, status, headers, config) 
		{
			Common.hideLoading();
		});
	};


	$scope.formatResponse = function(array)
	{
		$.each(array, function()
		{
			this.primaryNavigations = [];

			if(this.pageId === 'null')
			{
				this.pageId = null;
			}
		});

		return array;
	};


	$scope.showModal = function()
	{
		$('#partners-modal .modal').modal('show');	
		$('#partners-modal .modal').off('shown.bs.modal');
		$('#partners-modal .modal').on('shown.bs.modal', function()		
		{
			$.each($scope.userPartners, function()
			{
				$('#partners-modal #' + this.id).prop('checked', true);
			});

			var fixHelper = function(e, ui) 
			{
				ui.children().each(function() 
				{
					$(this).width($(this).width());
				});
				return ui;
			};

			$('#sort tbody').sortable(
			{
				helper: fixHelper
			});

			$('#sort tbody').on('sortstop', function(event, ui)
			{
				var ids, id, temp;

				ids = {};

				$('#sort tbody').find('tr').each(function(i)
				{
					id = $(this).attr('data-id');

					if(id)
					{
						ids[id] = i;
					}
				});

				$.each($scope.userPartners, function()
				{
					this.index = ids[this.id];
				});
				
				$scope.userPartners.sort(function(a, b)
				{
					return a.index-b.index;
				});

				$('#modal-all-partners input').first().click();
				$('#modal-all-partners input').first().click();
			});
		});
	};


	$scope.partnerClicked = function(partner, event)
	{
		if(event.target.checked === true)
		{
			if($scope.userPartners.length !== 5)
			{
				$scope.userPartners.push(partner);
			}
			else
			{
				$(event.target).prop('checked', false);
			}
		}
		else
		{
			$.each($scope.userPartners, function(i)
			{
				if(this.id === partner.id)
				{
					$scope.userPartners.splice(i,1);
					return false;
				}
			});
		}
	};


	$scope.submit = function()
	{
		if($scope.userPartners.length > 0 && $scope.userPartners.length <= 5)
		{
			Common.showLoading();

			var partners = [];

			$('#sort tbody').find('tr').each(function(i)
			{
				partners.push(
				{
					index : i,
					id : $(this).attr('data-id')
				});
			});
			/*
			$scope.userPartners.sort(function(a, b)
			{
				return a.index-b.index;
			});*/

			if($scope.userPartners !== Cache.userPartners)
			{
				angular.copy($scope.userPartners, Cache.userPartners);
			}

			if($scope.allPartners !== Cache.allPartners)
			{
				angular.copy($scope.allPartners, Cache.allPartners);
			}
			
			if(!Common.online())
			{
				$('#partners-modal').find('.modal').modal('hide');
				Common.hideLoading();
				return true;
			}	

			$http(
			{
				url: 'partners',
				method: "POST",
				data: {partners:partners}
			})
			.success(function (data, status, headers, config) 
			{
				$('#partners-modal').find('.modal').modal('hide');
				Common.hideLoading();
			})
			.error(function (data, status, headers, config) 
			{
				Common.hideLoading();
				$('#modal-partners').show();
				Common.setErrors($scope, true, data[0]);
			});
		}
	};

	$scope.allPartners = Cache.allPartners;
	$scope.userPartners = Cache.userPartners;

	if($scope.userPartners.length === 0)
	{
		$scope.getPartners();
	}

	(function()
	{
		/*
		var hashArray, wait, timeout;

		hashArray = decodeURIComponent(window.location.hash).split('/');

		if(hashArray[1] === 'search')
		{
			$('#search-input').val(hashArray[2]);

			wait = function()
			{
				window.clearTimeout(timeout);

				if($("#searchParameters option").length > 2)
				{	
					$("#searchParameters").val(hashArray[3]);
				}	
				else
				{
					timeout = window.setTimeout(function(){wait();}, 100);
				}
			};

			wait();
		}*/
	})();
}]);



