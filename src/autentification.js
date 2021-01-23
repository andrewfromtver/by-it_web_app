/* Login/logout */
window.onload = function() {
    login();
    setTimeout(initApp, 4500);
};
function login(firstLoad = false) {
    if (firstLoad) {
        if (navigator.appVersion) {
            deviceInfo = navigator.appVersion;
        }
        else {
            deviceInfo = 'unknown device';
        }
        localStorage.setItem('deviceInfo', deviceInfo);
        preloadMedia();
    }
    if (localStorage.itemsList) {
        itemsList = JSON.parse(localStorage.itemsList);
    }
    if (localStorage.savedList) {
        savedList = JSON.parse(localStorage.savedList);
    }
    if (localStorage.userNotifications) {
        userNotifications = JSON.parse(localStorage.userNotifications);
    }
    if (localStorage.deviceInfo) {
        deviceInfo = localStorage.deviceInfo;
    }
}
function logout(type = 'none') {
    if (type == 'shutDown') {
        selectedRows = 0;
    }
    else {
        if (type == 'none') {
            if (savedList.length > 0) {
                blurUi(true);
                document.querySelector('body').innerHTML += send_data_warn;
            }
            else {
                selectedRows = 0;
                document.querySelector('.content').querySelector('button').innerHTML = inbutton_loader;
                deviceInfo = '';
                localStorage.removeItem('deviceInfo');
                setTimeout(function() {
                if (navigator.app) {
                    navigator.app.exitApp();
                }
                initApp();
                }, 1000);
            }
        }
        else if (type == 'yes') {
            selectedRows = 0;
            document.querySelector('#yes').innerHTML = inbutton_loader;
            sendJson(savedList);
            deviceInfo = '';
            localStorage.removeItem('deviceInfo');
            setTimeout(function() {
            if (navigator.app) {    
                navigator.app.exitApp();
            }
            initApp();
            }, 3000);
        }
        else if (type == 'no') {
            selectedRows = 0;
            document.querySelector('#no').innerHTML = inbutton_loader;
            deviceInfo = '';
            localStorage.removeItem('deviceInfo');
            setTimeout(function() {
            if (navigator.app) {
                navigator.app.exitApp();
            }
            initApp();
            }, 1000);
        }
    }
}