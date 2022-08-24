var body = $response.body;
var obj = JSON.parse(body);

obj.message = "操作成功";
obj.code = 0;
body = JSON.stringify(obj);
$done(body);

/*
^https:\/\/www\.gmugmu\.com\/api\/social\/regret_like.* url script-response-body jmfh.js
积木反悔
*/
