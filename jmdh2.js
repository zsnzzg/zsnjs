var body = $request.body;
var obj = JSON.parse(body);

obj.userId = 363096;

body = JSON.stringify(obj);
$done(body);

/*
^https:\/\/www\.gmugmu\.com\/api\/v1\/im\/conversation\/start.* url script-request-body jmdh2.js
*/
