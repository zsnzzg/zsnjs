var body = $response.body;
var obj = JSON.parse(body);

obj.data.accountInfo.vip = 1;
obj.data.accountInfo.vipRestDays = 365;
obj.data.accountInfo.likeMeExpiresTime = "2021-04-07 19:02:24";
obj.data.accountInfo.vipExpiredDays = 0;
obj.data.accountInfo.regionCode = "1";
obj.data.accountInfo.vipExpirationTime = "2021-04-07 19:02:24";
obj.data.accountInfo.vipCount.todayRegretCount = 10;
obj.data.accountInfo.vipCount.superLikeCount = 3;
obj.data.accountInfo.vipCount.superExposureCount = 3;

body = JSON.stringify(obj);
$done(body);

/*
^https:\/\/www\.gmugmu\.com\/api\/account\/getmyself.* url script-response-body jimu.js
*/
