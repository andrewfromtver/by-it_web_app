"use strict";

/* Login/logout */
window.onload = function () {
  login();
  setTimeout(initApp, 4500);
};

function login() {
  var firstLoad = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (firstLoad) {
    username = 'Cписок покупок';
    localStorage.setItem('username', username);
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

  if (localStorage.username) {
    username = localStorage.username;
  }
}

function logout() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'none';

  if (type == 'shutDown') {
    selectedRows = 0;
  } else {
    if (type == 'none') {
      if (savedList.length > 0) {
        blurUi(true);
        document.querySelector('body').innerHTML += send_data_warn;
      } else {
        document.querySelector('.content').querySelector('button').innerHTML = inbutton_loader;
        username = '';
        localStorage.removeItem('username');
        setTimeout(function () {
          if (navigator.app) {
            navigator.app.exitApp();
          }

          initApp();
        }, 1000);
      }
    } else if (type == 'yes') {
      selectedRows = 0;
      document.querySelector('#yes').innerHTML = inbutton_loader;
      sendJson(savedList);
      username = '';
      localStorage.removeItem('username');
      setTimeout(function () {
        if (navigator.app) {
          navigator.app.exitApp();
        }

        initApp();
      }, 3000);
    } else if (type == 'no') {
      selectedRows = 0;
      document.querySelector('#no').innerHTML = inbutton_loader;
      username = '';
      localStorage.removeItem('username');
      setTimeout(function () {
        if (navigator.app) {
          navigator.app.exitApp();
        }

        initApp();
      }, 1000);
    }
  }
}