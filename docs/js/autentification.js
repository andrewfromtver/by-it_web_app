"use strict";

/* Login/logout */
window.onload = function () {
  login();
};

function login() {
  var firstLoad = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (firstLoad) {
    username = 'Cписок покупок';
    localStorage.setItem('username', username);
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
    preloadMedia();
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
        navigator.vibrate(75);
        document.querySelector('body').innerHTML += "\n                    <div class=\"add__placeholder\">\n                        <div class=\"add\">\n                            <h1>\u041F\u043E\u043C\u043E\u0433\u0438\u0442\u0435 \u043D\u0430\u043C \u0441\u0442\u0430\u0442\u044C \u043B\u0443\u0447\u0448\u0435</h1>\n                            <p style=\"font-size: 14px;\"><code>\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043C\u043E\u0447\u044C \u043D\u0430\u043C \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043B\u0443\u0447\u0448\u0435, \n                            \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0432 \u043D\u0430\u043C \u0441\u0432\u043E\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0435 \u0441\u043F\u0438\u0441\u043A\u0438 \u043F\u043E\u043A\u0443\u043F\u043E\u043A.\n                            \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u043D\u0430\u043C \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \n                            \u0443\u0434\u043E\u0431\u043D\u0435\u0435 \u0434\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F. \u0412\u0441\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043C\u0430\u044F \u0432\u0430\u043C\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0434\u0435\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\n                            \u043C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u0430\u0448\u0438 \u0441\u043F\u0438\u0441\u043A\u0438 \u043F\u043E\u043A\u0443\u043F\u043E\u043A, \u0431\u0435\u0437 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438 \u043A \u0432\u0430\u0448\u0438\u043C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u043C \u0434\u0430\u043D\u043D\u044B\u043C.</code></p>\n                            <div style=\"display: flex; flex-direction: row; justify-content: center;\">\n                                <button id=\"yes\" style=\"background-color: #5cd8dc;\"\n                                    onclick=\"logout('yes')\">\n                                        \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C\n                                </button>\n                                <button id=\"no\" style=\"background-color: #fba29e;\"\n                                    onclick=\"logout('no')\">\n                                        \u041D\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C\n                                </button>\n                            </div>\n                            <div class=\"error\"></div>\n                        </div>\n                    </div>\n                ";
      } else {
        document.querySelector('.content').querySelector('button').innerHTML = "\n                    <div>\n                        <div style=\"display: flex; justify-content: center;\">\n                            <div class=\"dot-loader\"></div>\n                        </div>\n                    </div>\n                ";
        username = '';
        localStorage.removeItem('username');
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      }
    } else if (type == 'yes') {
      document.querySelector('#yes').innerHTML = "\n                <div>\n                    <div style=\"display: flex; justify-content: center;\">\n                        <div class=\"dot-loader\"></div>\n                    </div>\n                </div>\n            ";
      sendJson(savedList);
      username = '';
      localStorage.removeItem('username');
      setTimeout(function () {
        window.location.reload();
      }, 3000);
    } else if (type == 'no') {
      document.querySelector('#no').innerHTML = "\n                <div>\n                    <div style=\"display: flex; justify-content: center;\">\n                        <div class=\"dot-loader\"></div>\n                    </div>\n                </div>\n            ";
      username = '';
      localStorage.removeItem('username');
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    }
  }
}