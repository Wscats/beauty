var app = angular.module("wsscat", ['ionic']);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('', '/index/blog');
	$stateProvider.state('index', {
		url: '/index',
		templateUrl: 'html/index.html',
		controller: 'indexCtrl'
	}).state('index.blog', {
		url: '/blog',
		templateUrl: 'html/blog.html',
		controller: 'blogCtrl'
	}).state('index.blogDetail', {
		url: '/blogDetail/:id',
		templateUrl: 'html/blogDetail.html',
		controller: 'blogDetailCtrl'
	}).state('index.news', {
		url: '/news',
		templateUrl: 'html/news.html',
		controller: 'newsCtrl'
	}).state('index.news.channels', {
		url: '/channels/:id',
		templateUrl: 'html/channels.html',
		controller: 'channelsCtrl'
	})
}]);