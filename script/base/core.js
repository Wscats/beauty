var app = angular.module("wsscat", ['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('', '/index');
	$stateProvider.state('index', {
		url: '/index',
		templateUrl: 'html/index.html',
		controller: 'indexCtrl'
	}).state('index.blog', {
		url: '/blog',
		views: {
			"first": {
				templateUrl: 'html/blog.html',
				controller: 'blogCtrl'
			}
		}
	}).state('index.b', {
		url: '/pageMain2/:id',
		views: {
			"first": {
				templateUrl: 'views/pageMain2.html',
				controller: 'pageMain2Ctrl'
			}
		}
	}).state('main.c', {
		url: '/pageMain3/:id',
		views: {
			"second": {
				templateUrl: 'views/pageMain3.html',
				//controller: 'pageMain3Ctrl'
			}
		}
	})
}]);