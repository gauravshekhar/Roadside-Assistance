angular.module('app.search', 
[
	'ui.router',
	'templates-main'
])


.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider)
{
	$stateProvider.state('search', 
	{
		url: '/search/:pageId/:query/',
		views:
		{
			'main':
			{
				controller: 'SearchController',
				templateUrl: '../development/controllers/search/search.tpl.html'
			},
			'header':
			{
				controller: 'HeaderController',
				templateUrl: '../development/controllers/header/header.tpl.html'
			},
			'footer':
			{
				controller: 'FooterController',
				templateUrl: '../development/controllers/footer/footer.tpl.html'
			},
			'loading':
			{
				controller: 'LoadingController',
				templateUrl: '../development/controllers/loading/loading.tpl.html'
			},
			'sidebar':
			{
				controller: 'SidebarController',
				templateUrl: '../development/controllers/sidebar/sidebar.tpl.html'
			}
		},
		data: {pageTitle: 'Search'}
	});
}])


.controller('SearchController', ['$scope', '$http', '$stateParams', 'Common', 'Cache', function($scope, $http, $stateParams, Common, Cache)
{
	$http(
	{
		url: (Common.online()) ? query : 'jsons/search.json',
		method: "GET"
	})
	.success(function (data, status, headers, config) 
	{
		Common.hideLoading();
		$scope.results = data;
	})
	.error(function (data, status, headers, config) 
	{
		Common.hideLoading();
	});

	/*	
	var waitForPartners, timer;

	waitForPartners = function()
	{
		window.clearTimeout(timer);

		if(Cache.allPartners.length > 0)
		{
			Common.showLoading();

			$scope.results = [];
			$scope.query = $stateParams.query;
			$scope.partnerId = $stateParams.partnerId;

			$.each(Cache.allPartners, function()
			{
				if($scope.partnerId === this.id)
				{
					$scope.partnerName = this.partnerName;
					return false;
				}
			});

			var query = 'search?query=' +$scope.query+ '&partnerId=' + $scope.partnerId + '&index=0&count=20';
			console.log(query);
	
			$http(
			{
				url: (Common.online()) ? query : 'jsons/search.json',
				method: "GET"
			})
			.success(function (data, status, headers, config) 
			{
				Common.hideLoading();
				$scope.results = data;
			})
			.error(function (data, status, headers, config) 
			{
				Common.hideLoading();
			});
		}
		else
		{
			timer = window.setTimeout(function(){waitForPartners();}, 100);
		}
	};*/

	//waitForPartners();
}]);


