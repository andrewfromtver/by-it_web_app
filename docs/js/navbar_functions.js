"use strict";

/* Navbar functions */
function main() {
  placeSwitch = 'assignList';

  if (selectedRows > 0) {
    warnPopup('main');
    return;
  }

  document.querySelector('body').innerHTML = nav_main;

  if (userNotifications.length > 0) {
    var notificationInner = nav_main_notifications;
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

  document.querySelector('.container').innerHTML = nav_admin;

  if (itemsList.length > 0) {
    var inner = '';
    itemsList.forEach(function (e) {
      inner += "\n                <tr id=\"".concat(e.id, "\">\n                    <td class=\"item__name\">\n                        <code>").concat(e.name, "</code>\n                    </td>\n                    <td>\n                        <code>").concat(e.qty, "</code>\n                    </td>\n                    <td class=\"delete\">\n                        <img onclick=\"delItem('").concat(e.id, "')\"\n                            class=\"action__img\"\n                            src=\"./img/delete.png\"\n                            alt=\"delete__item\">\n                    </td>\n                </tr>\n            ");
    });
    document.querySelector('.admin__table').innerHTML = inner;

    if (itemsList.length > 1) {
      document.querySelector('.admin').innerHTML += nav_admin_save;
    }
  }

  document.querySelector('.content').innerHTML = exit_button;

  if (document.querySelector('.admin__table').rows.length > 0) {
    document.querySelector('.content').innerHTML = chart_add;
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
    document.querySelector('.admin__table').innerHTML += empty_table;
  }

  activeitem('admin');
}

function user() {
  if (selectedRows > 0) {
    warnPopup('user');
    return;
  }

  document.querySelector('.container').innerHTML = nav_user;

  if (itemsList.length > 0) {
    var inner = '';
    itemsList.forEach(function (e) {
      inner += "\n                <tr id=\"".concat(e.id, "\">\n                    <td class=\"item__name\">\n                        <code>").concat(e.name, "</code>\n                    </td>\n                    <td>\n                        <code>").concat(e.qty, "</code>\n                    </td>\n                    <td class=\"delete\">\n                        <img onclick=\"check('").concat(e.id, "')\"\n                            class=\"action__img\"\n                            src=\"./img/delete.png\"\n                            alt=\"delete__item\">\n                    </td>\n                </tr>\n            ");
    });
    document.querySelector('.user__table').innerHTML = inner;
  }

  document.querySelector('.content').innerHTML = exit_button;

  if (document.querySelector('.user__table').rows.length > 0) {
    document.querySelector('.content').innerHTML = chart_add;
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
    document.querySelector('.user__table').innerHTML += empty_table;
  }

  activeitem('user');
}

function toplist() {
  placeSwitch = 'loadList';

  if (selectedRows > 0) {
    warnPopup('toplist');
    return;
  }

  document.querySelector('.container').innerHTML = nav_topList;

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
        inner += nav_topList_inactive_assign;
      }

      inner += "\n                    <td class=\"delete\">\n                        <img onclick=\"delItem('".concat(e.id, "', 'list')\"\n                            class=\"action__img\"\n                            src=\"./img/delete.png\"\n                            alt=\"delete__item\">\n                    </td>\n                </tr>\n            ");
    });
    document.querySelector('.top__table').innerHTML = inner;
  } else {
    document.querySelector('.top__table').innerHTML += empty_table;
  }

  document.querySelector('.content').innerHTML = exit_button;
  activeitem('top');
}