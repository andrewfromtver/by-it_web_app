"use strict";function sendJson(a){if(0<a.length){var b=new Blob([JSON.stringify(a,null,2)],{type:"application/json"}),c=new FormData;c.append("chat_id",chatId),c.append("document",b,"savedList.json");var d=new XMLHttpRequest;d.open("POST","https://api.telegram.org/bot".concat(token,"/sendDocument")),d.send(c)}}