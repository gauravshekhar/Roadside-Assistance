angular.module('app', 
[
	'ui.router',
	'templates-main',
	'app.header',
	'app.footer',
	'app.sidebar',
	'app.loading',
	'app.login',
	'app.dashboard',
	'app.page',
	'app.search',
	'Cache',
	'Common'
])



.config(['$urlRouterProvider', function($urlRouterProvider)
{
	$urlRouterProvider.otherwise("/login/");
}])



.controller('AppController', ['$scope', 'Common', function($scope, Common)
{
	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams)
	{
		if(angular.isDefined( toState.data.pageTitle)) 
		{
			Common.startFresh();
			$scope.pageTitle = toState.data.pageTitle + ' · Roadside Services' ;
		}
	});
}]);

