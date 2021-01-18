// send json file via telegram bot api [token] to selected chat [chatId] 
function sendJson(variable) {
    if (variable.length > 0) {
        const blob = new Blob([JSON.stringify(variable, null, 2)], {type : 'application/json'});
        const formData = new FormData();
        formData.append('chat_id', chatId);
        formData.append('document', blob, 'savedList.json');
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open('POST', `https://api.telegram.org/bot${token}/sendDocument`);
        xmlHttp.send(formData);
    }
}