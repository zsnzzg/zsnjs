var body = $response.body;
var obj = JSON.parse(body);

obj.data.vip_date = 1619731147;
obj.data.exposure_date = 1619731147;
obj.data.exposure_times = 2;
obj.data.svip_date = 1619731147;
obj.data.surplus_slip_times = 99;
obj.data.superlike_times = 2;
obj.data.vip_level = 2;
obj.data.vip_times = 3;//超级喜欢
obj.data.status = 1;
//obj.privilegeCoinCosts.superLike = 0;
//obj.superlikeDialogParameter.maxShowsPerUserForNonVIP = 30;
body = JSON.stringify(obj);
$done(body);

/*
^https:\/\/api\.haima\.shop\/user\/43007 url script-response-body youer.js
*/
