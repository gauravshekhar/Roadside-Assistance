angular.module('app.login', 
[
	'ui.router',
	'templates-main'
])


.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider)
{
	$stateProvider.state('login', 
	{
		url: '/login/',
		views:
		{
			'main':
			{
				controller: 'LoginController',
				templateUrl: '../development/controllers/login/login.tpl.html'
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
			}
		},
		data: {pageTitle: 'Login'}
	});
}])



.controller('LoginController', ['$scope', '$http', '$location', 'Common', function($scope, $http, $location, Common)
{
	$('#username').focus();
	Common.setErrors($scope, false, '');

	$scope.validateLogin = function()
	{
		Common.setErrors($scope, false, '');

		if($scope.username && $scope.password)
		{
			Common.showLoading();
			
			$scope.requestData = 
			{
				username : $scope.username,
				password : $scope.password
			};

			if(!Common.online())
			{
				return $location.path("/dashboard/");
			}

			$http(
			{
				url: 'login',
				method: "POST",
				data: $scope.requestData
			})
			.success(function (data, status, headers, config) 
			{
				$location.path("/dashboard/");
			})
			.error(function (data, status, headers, config) 
			{
				Common.hideLoading();
				Common.setErrors($scope, true, data[0]);
			});
		}
		else
		{
			Common.setErrors($scope, true, 'Username and password required.');
		}
	};

	$scope.help = function()
	{
		Common.setErrors($scope, false, '');
		$('#modal-need-help').modal('show');
	};
}]);


