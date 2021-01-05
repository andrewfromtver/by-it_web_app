"use strict";

function sendJson(variable) {
  if (username != "Демо-режим" & variable.length > 0) {
    var blob = new Blob([JSON.stringify(variable, null, 2)], {
      type: 'application/json'
    });
    var formData = new FormData();
    formData.append('chat_id', chatId);
    formData.append('document', blob, 'savedList.json');
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('POST', "https://api.telegram.org/bot".concat(token, "/sendDocument"));
    xmlHttp.send(formData);
  }
}