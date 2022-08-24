var body = $response.body;
var obj = JSON.parse(body);

obj.data.status = 1;
//obj.privilegeCoinCosts.superLike = 0;
//obj.superlikeDialogParameter.maxShowsPerUserForNonVIP = 30;
body = JSON.stringify(obj);
$done(body);

/*
^https:\/\/api\.haima\.shop\/auth url script-response-body youersq.js
*/
