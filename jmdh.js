var body = $request.body;
var obj = JSON.parse(body);

obj.uid = 363096;

body = JSON.stringify(obj);
$done(body);

/*
^https:\/\/www\.gmugmu\.com\/api\/v1\/im\/conversation.* url script-request-body jmdh.js
*/
