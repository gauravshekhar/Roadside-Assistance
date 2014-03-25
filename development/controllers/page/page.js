angular.module('app.page', [])


.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider)
{
	$stateProvider.state('page', 
	{
		url: '/page/:pageId/',
		views:
		{
			'main':
			{
				controller: 'PageController',
				templateUrl: '../development/controllers/page/page.tpl.html'
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
		data: {pageTitle: 'Dashboard'}
	});
}])


.controller('PageController', ['$scope', '$stateParams','$http', 'Cache', 'Common', function($scope, $stateParams, $http, Cache, Common)
{
	var timer, waitForPartners;

	waitForPartners = function()
	{
		window.clearTimeout(timer);

		if(Cache.allPartners.length > 0)
		{
			$http(
			{
				url: (Common.online()) ? 'page=' + $stateParams.pageId : 'jsons/page.json',
				method: "GET"
			})
			.success(function (data, status, headers, config) 
			{
				$scope.type = data.type;
				$scope.partnerId = data.partnerId;
				$scope.partnerName = data.partnerName;
				$scope.partnerDescription = data.partnerDescription;
				$scope.primaryPageList = data.primaryPageList;
			})
			.error(function (data, status, headers, config) 
			{

			});
		}
		else
		{
			timer = setTimeout(function(){waitForPartners();}, 100);
		}
	};

	waitForPartners();
}]);



