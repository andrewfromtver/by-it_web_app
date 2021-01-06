"use strict";

/* Navbar functions */
function main() {
  placeSwitch = 'assignList';

  if (selectedRows > 0) {
    warnPopup('main');
    return;
  }

  document.querySelector('body').innerHTML = "\n        <div class=\"navbar\">\n            <div class=\"navlinks\">\n                <div class=\"navlink\" id=\"main\" onclick=\"main()\">\n                    <img class=\"navlink__img\" width=\"25px\" src=\"./img/home.png\">\n                </div>\n                <div class=\"navlink\" id=\"admin\" onclick=\"admin()\">\n                    <img class=\"navlink__img\" width=\"25px\" src=\"./img/list.png\">\n                </div>\n                <div class=\"navlink\" id=\"user\" onclick=\"user()\">\n                    <img class=\"navlink__img\" width=\"25px\" src=\"./img/buy.png\">\n                </div>\n                <div class=\"navlink\" id=\"top\" onclick=\"toplist()\">\n                    <img class=\"navlink__img\" width=\"25px\" src=\"./img/top.png\">\n                </div>\n            </div>\n        </div>\n        <div class=\"app__data\">\n            <div class=\"container\">\n                <h1>".concat(username, "</h1>\n                <div class=\"main__img\">\n                    <img src=\"./img/logo.png\" alt=\"main\">\n                </div>\n                <p>\u0421\u0435\u0440\u0432\u0438\u0441 \u0434\u043B\u044F \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0441\u043F\u0438\u0441\u043A\u0430 \u043F\u043E\u043A\u0443\u043F\u043E\u043A</p>\n            </div>\n            <div class=\"content\">\n                <button \n                    style=\"width: 94%; margin: 3%; background-color: #fba29e;\"\n                    onclick=\"logout()\">\n                        \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438\n                </button>\n            </div>\n        </div>\n        <div class=\"footer\">Copyright \xA9 2020 Andranik Sarkisyan</div>\n    ");

  if (userNotifications.length > 0) {
    var notificationInner = "\n            <table style=\"margin-top: 20px;\">\n                <thead>\n                    <tr>\n                        <td class=\"head\" colspan=\"3\">\u041D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F</td>\n                    </tr>\n                </thead>\n                <tbody class=\"notification__table\"></tbody>\n            </table>\n            <button\n                style=\"width: 94%; margin: 3%; background-color: #fba29e;\"\n                onclick=\"logout()\">\n                    \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438\n            </button>\n        ";
    document.querySelector('.content').innerHTML = notificationInner;
    notificationInner = '';
    userNotifications.forEach(function (e) {
      if (e.id == username) {
        notificationInner += "\n                    <tr id=\"".concat(e.content.id, "\">\n                        <td class=\"item__name\" style=\"text-align: center;\">\n                            <code>").concat(e.content.content.message, "</code>\n                        </td>\n                        <td style=\"background-color: #5cd8dc; border-radius: 0;\" class=\"delete\">\n                            <img onclick=\"useList('").concat(e.content.content.list, "')\"\n                                class=\"action__img\"\n                                src=\"./img/use.png\"\n                                alt=\"delete__item\">\n                        </td>\n                        <td class=\"delete\">\n                            <img onclick=\"delItem('").concat(e.content.id, "', 'onlyNotyf')\"\n                                class=\"action__img\"\n                                src=\"./img/delete.png\"\n                                alt=\"delete__item\">\n                        </td>\n                    </tr>\n                ");
      }
    });
    document.querySelector('.notification__table').innerHTML = notificationInner;
  }

  activeitem('main');
}

function admin() {
  if (selectedRows > 0) {
    warnPopup('admin');
    return;
  }

  document.querySelector('.container').innerHTML = "\n        <div class=\"admin\">\n            <h1>\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A</h1>\n            <table>\n                <thead>\n                    <tr>\n                        <td class=\"head\">\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435</td>\n                        <td class=\"head\" colspan=\"2\">\u041A\u043E\u043B-\u0432\u043E</td>\n                    </tr>\n                </thead>\n                <tbody class=\"admin__table\"></tbody>\n            </table>\n            <div class=\"add__item\">\n                <img onclick=\"addItem()\" src=\"./img/add.png\" alt=\"add__item\">\n            </div>\n        </div>\n    ";

  if (itemsList.length > 0) {
    var inner = '';
    itemsList.forEach(function (e) {
      inner += "\n                <tr id=\"".concat(e.id, "\">\n                    <td class=\"item__name\">\n                        <code>").concat(e.name, "</code>\n                    </td>\n                    <td>\n                        <code>").concat(e.qty, "</code>\n                    </td>\n                    <td class=\"delete\">\n                        <img onclick=\"delItem('").concat(e.id, "')\"\n                            class=\"action__img\"\n                            src=\"./img/delete.png\"\n                            alt=\"delete__item\">\n                    </td>\n                </tr>\n            ");
    });
    document.querySelector('.admin__table').innerHTML = inner;

    if (itemsList.length > 1) {
      document.querySelector('.admin').innerHTML += "\n                <button style=\"width: 94%; margin: 3%; background-color: #5cd8dc;\"\n                    onclick=\"saveList()\">\n                        \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435\n                </button>\n            ";
    }
  }

  document.querySelector('.content').innerHTML = "\n        <button style=\"width: 94%; margin: 3%; background-color: #fba29e;\"\n            onclick=\"logout()\">\n                \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438\n        </button>\n    ";

  if (document.querySelector('.admin__table').rows.length > 0) {
    document.querySelector('.content').innerHTML = "\n            <p>\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438</p>\n            <div class=\"chart\">\n                <canvas id=\"statChart\"></canvas>\n            </div>\n            <button style=\"width: 94%; margin: 3%; background-color: #fba29e;\"\n                onclick=\"logout()\">\n                    \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438\n            </button>\n        ";
    var itemsCollection = document.querySelector('.admin__table').rows;
    var qty = itemsCollection.length;
    var itemsQty = 0;

    for (var index = 0; index < qty; index++) {
      itemsQty += Number(document.querySelector('.admin__table').rows[index].querySelectorAll('td')[1].innerText.split(' ')[0]);
    }

    var ctx = document.getElementById('statChart').getContext('2d');
    var chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Список покупок'],
        datasets: [{
          label: 'Позиции',
          backgroundColor: '#5cd8dc',
          data: [qty, 0]
        }]
      },
      options: {
        layout: {
          padding: {
            left: 15,
            right: 25,
            top: 15,
            bottom: 25
          }
        }
      }
    });
  } else {
    document.querySelector('.admin__table').innerHTML += "\n            <td colspan=\"2\">\xAF\\_(\u30C4)_/\xAF</td>\n        ";
  }

  activeitem('admin');
}

function user() {
  if (selectedRows > 0) {
    warnPopup('user');
    return;
  }

  document.querySelector('.container').innerHTML = "\n        <div class=\"admin\" style=\"margin-bottom: 25px;\">\n            <h1>\u041A\u0443\u043F\u0438\u0442\u044C \u043F\u043E \u0441\u043F\u0438\u0441\u043A\u0443</h1>\n            <table>\n                <thead>\n                    <tr>\n                        <td class=\"head\">\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435</td>\n                        <td class=\"head\" colspan=\"2\">\u041A\u043E\u043B-\u0432\u043E</td>\n                    </tr>\n                </thead>\n                <tbody class=\"user__table\"></tbody>\n            </table>\n        </div>\n    ";

  if (itemsList.length > 0) {
    var inner = '';
    itemsList.forEach(function (e) {
      inner += "\n                <tr id=\"".concat(e.id, "\">\n                    <td class=\"item__name\">\n                        <code>").concat(e.name, "</code>\n                    </td>\n                    <td>\n                        <code>").concat(e.qty, "</code>\n                    </td>\n                    <td class=\"delete\">\n                        <img onclick=\"check('").concat(e.id, "')\"\n                            class=\"action__img\"\n                            src=\"./img/delete.png\"\n                            alt=\"delete__item\">\n                    </td>\n                </tr>\n            ");
    });
    document.querySelector('.user__table').innerHTML = inner;
  }

  document.querySelector('.content').innerHTML = "\n        <button style=\"width: 94%; margin: 3%; background-color: #fba29e;\"\n            onclick=\"logout()\">\n                \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438\n        </button>\n    ";

  if (document.querySelector('.user__table').rows.length > 0) {
    document.querySelector('.content').innerHTML = "\n            <p>\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438</p>\n            <div class=\"chart\">\n                <canvas id=\"statChart\"></canvas>\n            </div>\n            <button style=\"width: 94%; margin: 3%; background-color: #fba29e;\"\n                onclick=\"logout()\">\n                    \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438\n            </button>\n        ";
    var itemsCollection = document.querySelector('.user__table').rows;
    var qty = itemsCollection.length;
    var itemsQty = 0;

    for (var index = 0; index < qty; index++) {
      itemsQty += Number(document.querySelector('.user__table').rows[index].querySelectorAll('td')[1].innerText);
    }

    var ctx = document.getElementById('statChart').getContext('2d');
    var chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Позиции'],
        datasets: [{
          label: 'План',
          backgroundColor: '#5cd8dc',
          data: [qty, itemsQty, 0]
        }, {
          label: 'Факт',
          backgroundColor: '#fba29e',
          data: [selectedRows, selectedItems, 0]
        }]
      },
      options: {
        layout: {
          padding: {
            left: 15,
            right: 25,
            top: 15,
            bottom: 25
          }
        }
      }
    });
  } else {
    document.querySelector('.user__table').innerHTML += "\n            <td colspan=\"2\">\xAF\\_(\u30C4)_/\xAF</td>\n        ";
  }

  activeitem('user');
}

function toplist() {
  placeSwitch = 'loadList';

  if (selectedRows > 0) {
    warnPopup('toplist');
    return;
  }

  document.querySelector('.container').innerHTML = "\n        <div class=\"admin\" style=\"margin-bottom: 25px;\">\n            <h1>\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0435 \u0441\u043F\u0438\u0441\u043A\u0438</h1>\n            <table>\n                <thead>\n                    <tr>\n                        <td class=\"head\" colspan=\"4\">\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435</td>\n                    </tr>\n                </thead>\n                <tbody class=\"top__table\"></tbody>\n            </table>\n        </div>\n    ";

  if (savedList.length > 0) {
    var inner = '';
    savedList.forEach(function (e) {
      inner += "\n                <tr id=\"".concat(e.id, "\">\n                    <td class=\"item__name\">\n                        <code>").concat(e.name, "</code>\n                    </td>\n                    <td style=\"background-color: #5cd8dc; border-radius: 3px;\" class=\"delete\">\n                        <img onclick=\"useList('").concat(e.id, "')\"\n                            class=\"action__img\"\n                            src=\"./img/use.png\"\n                            alt=\"delete__item\">\n                    </td>\n            ");
      var checkIndex = [];
      userNotifications.forEach(function (e) {
        checkIndex.push(e.content.id);
      });

      if (checkIndex.indexOf(e.id) == -1) {
        inner += "\n                    <td style=\"background-color: #5cd8dc; border-radius: 3px;\" class=\"delete\">\n                        <img onclick=\"assignList('".concat(e.id, "')\"\n                            class=\"action__img\"\n                            src=\"./img/assign.png\"\n                            alt=\"delete__item\">\n                    </td>\n                ");
      } else {
        inner += "\n                    <td style=\"background-color: #ccc; opacity: 0.5; border-radius: 3px;\" class=\"delete\">\n                        <img\n                            class=\"action__img\"\n                            src=\"./img/assign.png\"\n                            alt=\"delete__item\">\n                    </td>\n                ";
      }

      inner += "\n                    <td class=\"delete\">\n                        <img onclick=\"delItem('".concat(e.id, "', 'list')\"\n                            class=\"action__img\"\n                            src=\"./img/delete.png\"\n                            alt=\"delete__item\">\n                    </td>\n                </tr>\n            ");
    });
    document.querySelector('.top__table').innerHTML = inner;
  } else {
    document.querySelector('.top__table').innerHTML += "\n            <td colspan=\"2\">\xAF\\_(\u30C4)_/\xAF</td>\n        ";
  }

  document.querySelector('.content').innerHTML = "\n        <button style=\"width: 94%; margin: 3%; background-color: #fba29e;\"\n            onclick=\"logout()\">\n                \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438\n        </button>\n    ";
  activeitem('top');
}