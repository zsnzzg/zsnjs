var body = $response.body;
var obj = JSON.parse(body);

obj.data.privileges.vip.status = 1;
obj.data.privileges.vip["buy_status"] = 1;
obj.data.privileges.vip["end_time"] = 4077660370;
obj.data.privileges.vip["rest_days"] = 360;
obj.data.privileges.likeme.status = 1;
obj.data.privileges.likeme.buy_status = 1;
obj.data.privileges.likeme["rest_days"] = 360;
obj.data.privileges.likeme["end_time"] = 4077660370;
//obj.userData.localytics = "Premium";
body = JSON.stringify(obj);
$done(body);

/*
^https:\/\/www\.gmugmu\.com\/api\/v1\/sell\/user\/privilege.* url script-response-body jmtq.js
*/
