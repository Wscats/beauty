app.controller('blogCtrl', function($scope) {
	var md = new Remarkable();
	console.log(md.render('# Remarkable rulezz!'));
})