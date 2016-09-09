<?php
	//header("Access-Control-Allow-Origin:*");
	$url = "http://api.1-blog.com/biz/bizserver/xiaohua/list.do?page=".$_GET['page']."&size=20";
	$res = file_get_contents($url);
	echo $_GET['callback'].'('.$res.')';
?>