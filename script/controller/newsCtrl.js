app.controller('newsCtrl', function($scope,$http) {
	var md = new Remarkable();
	console.log(md.render('# Remarkable rulezz!'));
	$http.jsonp('newsChannels.php',{
		params:{
			callback:"JSON_CALLBACK"
		}
	}).success(function(data){
		console.log(data);
		$scope.channels = data.showapi_res_body.channelList
	})
	
	$http.jsonp("news.php",{
		params:{
			callback:"JSON_CALLBACK"
		}
	}).success(function(data){
		console.log(data);
		$scope.news = data.showapi_res_body.pagebean.contentlist
	})
})