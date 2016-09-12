<?php
    $ch = curl_init();
    $url = 'http://apis.baidu.com/showapi_open_bus/channel_news/channel_news';
    $header = array(
        'apikey: 0aea38d1a7c4443f2f00adc86c4c3e72',
    );
    // 添加apikey到header
    curl_setopt($ch, CURLOPT_HTTPHEADER  , $header);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    // 执行HTTP请求
    curl_setopt($ch , CURLOPT_URL , $url);
    $res = curl_exec($ch);
	echo $_GET['callback']."(".$res.")";
    //echo json_decode($res);
	//var_dump($res);
?>