var body = $response.body;
var obj = JSON.parse(body);

obj.code = 200;
//obj.msg = "添加关注成功";
//obj.privilegeCoinCosts.superLike = 0;
//obj.superlikeDialogParameter.maxShowsPerUserForNonVIP = 30;
body = JSON.stringify(obj);
$done(body);

/*
^https:\/\/api\.haima\.shop\/special\/superlike url script-response-body youervip.js
*/
