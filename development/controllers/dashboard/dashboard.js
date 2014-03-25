angular.module('app.dashboard', 
[
	'ui.router',
	'templates-main'
])


.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider)
{
	$stateProvider.state('dashboard', 
	{
		url: '/dashboard/',
		views:
		{
			'main':
			{
				controller: 'DashboardController',
				templateUrl: '../development/controllers/dashboard/dashboard.tpl.html'
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


.controller('DashboardController', ['$scope', 'Cache', function($scope, Cache)
{
	$scope.selectedPartner = null;
	$scope.userPartners = Cache.userPartners;

	$scope.partnerClicked = function(partner, event)
	{
		$scope.selectedPartner = ($scope.selectedPartner === partner) ? null : partner;
	};
}]);

