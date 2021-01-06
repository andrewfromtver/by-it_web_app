"use strict";

/* Itesm processing */
function addItem() {
  blurUi(true);
  document.querySelector('body').innerHTML += "\n    <div class=\"add__placeholder\">\n        <div class=\"add\">\n            <h1>\u0412 \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043A\u0443\u043F\u043E\u043A</h1>\n                <div class=\"omrs-input-group\">\n                    <label class=\"omrs-input-underlined\">\n                    <input\n                        required\n                        class=\"add__input name\"\n                        type=\"text\"\n                        maxlength=\"23\"\n                        oninput=\"errorCleaner()\"\n                    >\n                    <span class=\"omrs-input-label\">\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435</span>\n                </div>\n            <div style=\"display: flex; flex-direction: row; justify-content: space-between;\">\n                <div style=\"margin-left: 3%; width: 47%;\">\n                        <div class=\"omrs-input-group\">\n                            <label class=\"omrs-input-underlined\">\n                            <input\n                                required\n                                class=\"add__input qty\"\n                                id=\"qtyInput\"\n                                type=\"text\" inputmode=\"numeric\"\n                                oninput=\"errorCleaner()\"\n                            >\n                            <span class=\"omrs-input-label\">\u041A\u043E\u043B-\u0432\u043E</span>\n                        </div>\n                </div>\n                <select style=\"width: 41%; margin-right: 6%;\"\n                    class=\"add__input unit\"\n                    placeholder=\"\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\"\n                    onchange=\"errorCleaner()\">\n                        <option id=\"0\">\u0448\u0442</option>\n                        <option id=\"1\">\u043A\u0433</option>\n                        <option id=\"2\">\u0433</option>\n                        <option id=\"3\">\u043B</option>\n                        <option id=\"4\">\u043C\u043B</option>\n                </select>\n            </div>\n            <div style=\"display: flex; flex-direction: row; justify-content: center;\">\n                <button style=\"background-color: #5cd8dc;\"\n                    onclick=\"confirmAction(true)\">\n                        \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\n                </button>\n                <button style=\"background-color: #fba29e;\"\n                    onclick=\"confirmAction(false)\">\n                        \u041E\u0442\u043C\u0435\u043D\u0430\n                </button>\n            </div>\n            <div class=\"error\"></div>\n        </div>\n    </div>\n    ";
  setInputFilter(document.getElementById("qtyInput"), function (value) {
    return /^\d*\,?\d*$/.test(value);
  });
}

function delItem(id) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'item';

  if (type == 'item') {
    document.getElementById(id).remove();
    itemsList = itemsList.filter(function (item) {
      return item.id != id;
    });
    localStorage.setItem('itemsList', JSON.stringify(itemsList));
    admin();
  }

  if (type == 'onlyNotyf') {
    userNotifications = userNotifications.filter(function (item) {
      return item.content.id != id;
    });
    localStorage.setItem('userNotifications', JSON.stringify(userNotifications));
    main();
  }

  if (type == 'list') {
    document.querySelector('body').innerHTML += "\n            <div class=\"add__placeholder\">\n                <div class=\"add\">\n                    <h1>\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A</h1>\n                    <div style=\"display: flex; flex-direction: row; justify-content: center;\">\n                        <button style=\"background-color: #fba29e;\"\n                            onclick=\"confirmAction(true, 'delList', '".concat(id, "')\">\n                                \u0423\u0434\u0430\u043B\u0438\u0442\u044C\n                        </button>\n                        <button style=\"background-color: #5cd8dc;\"\n                            onclick=\"confirmAction(false, 'loadList')\">\n                                \u041E\u0442\u043C\u0435\u043D\u0430\n                        </button>\n                    </div>\n                </div>\n                <div class=\"error\">\n                    <p style=\"color: tomato; width: 400px; max-width: 95vw; font-size: 14px;\">\n                        <code>\u0421\u043F\u0438\u0441\u043E\u043A \u0442\u0430\u043A\u0436\u0435 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0451\u043D \u0438\u0437 \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0439</code>\n                    </p>\n                </div>\n            </div>\n        ");
    blurUi(true);
  }
}

function check(id) {
  var element = document.getElementById(id).style;

  if (element.textDecoration == 'line-through' && element.opacity == '0.45') {
    element.textDecoration = '';
    element.opacity = '';
    selectedRows -= 1;
    selectedItems -= Number(document.getElementById(id).querySelectorAll('td')[1].innerText);
  } else {
    element.textDecoration = 'line-through';
    element.opacity = '0.45';
    selectedRows += 1;
    selectedItems += Number(document.getElementById(id).querySelectorAll('td')[1].innerText);
  }

  document.querySelector('.content').innerHTML = "\n        <p>\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438</p>\n        <div class=\"chart\">\n            <canvas id=\"statChart\"></canvas>\n        </div>\n        <button style=\"width: 94%; margin: 3%; background-color: #fba29e;\"\n            onclick=\"logout()\">\n                \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438\n        </button>\n    ";
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
}

function saveList() {
  document.querySelector('body').innerHTML += "\n        <div class=\"add__placeholder\">\n            <div class=\"add\">\n                <h1>\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A</h1>\n                    <div class=\"omrs-input-group\">\n                        <label class=\"omrs-input-underlined\">\n                        <input\n                            required\n                            class=\"add__input name\n                            type=\"text\"\n                            maxlength=\"25\"\n                            oninput=\"errorCleaner()\"\n                        >\n                        <span class=\"omrs-input-label\">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435</span>\n                    </div>\n                <div style=\"display: flex; flex-direction: row; justify-content: center;\">\n                    <button style=\"background-color: #5cd8dc;\"\n                        onclick=\"confirmAction(true, 'list')\">\n                            \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C\n                    </button>\n                    <button style=\"background-color: #fba29e;\"\n                        onclick=\"confirmAction(false)\">\n                            \u041E\u0442\u043C\u0435\u043D\u0430\n                    </button>\n                </div>\n                <div class=\"error\"></div>\n            </div>\n        </div>\n    ";
  blurUi(true);
}

function assignList(id) {
  document.querySelector('body').innerHTML += "\n        <div class=\"add__placeholder\">\n            <div class=\"add\">\n                <h1>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0435</h1>\n                    <div class=\"omrs-input-group\">\n                        <label class=\"omrs-input-underlined\">\n                        <input\n                            required\n                            class=\"add__input message\"\n                            type=\"text\"\n                            maxlength=\"75\"\n                            oninput=\"errorCleaner()\"\n                        >\n                        <span class=\"omrs-input-label\">\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439</span>\n                    </div>\n                <div style=\"display: flex; flex-direction: row; justify-content: center;\">\n                    <button style=\"background-color: #5cd8dc;\"\n                        onclick=\"confirmAction(true, 'assignList', '".concat(id, "')\">\n                            \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\n                    </button>\n                    <button style=\"background-color: #fba29e;\"\n                        onclick=\"confirmAction(false, 'loadList')\">\n                            \u041E\u0442\u043C\u0435\u043D\u0430\n                    </button>\n                </div>\n                <div class=\"error\"></div>\n            </div>\n        </div>\n    ");
  blurUi(true);
}

function useList(id) {
  document.querySelector('body').innerHTML += "\n    <div class=\"add__placeholder\">\n        <div class=\"add\">\n            <h1>\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A</h1>\n            <div style=\"display: flex; flex-direction: row; justify-content: center;\">\n                <button style=\"background-color: #5cd8dc;\"\n                    onclick=\"confirmAction(true, 'loadList', '".concat(id, "')\">\n                        \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C\n                </button>\n                <button style=\"background-color: #fba29e;\"\n                    onclick=\"confirmAction(false, '").concat(placeSwitch, "')\">\n                        \u041E\u0442\u043C\u0435\u043D\u0430\n                </button>\n            </div>\n        </div>\n        <div class=\"error\">\n            <p style=\"color: tomato; width: 400px; max-width: 95vw; font-size: 14px;\">\n                <code>\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043A\u0443\u043F\u043E\u043A \u0431\u0443\u0434\u0435\u0442 \u0438\u0437\u043C\u0435\u043D\u0451\u043D</code>\n            </p>\n        </div>\n    </div>\n    ");
  blurUi(true);
}

function confirmAction(save) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var generateId = function generateId() {
    return "".concat(Math.round(Math.random() * 1e8).toString(16));
  };

  if (save == true) {
    if (!type) {
      var itemName = document.querySelector('.name').value;
      var itemQty = document.querySelector('.qty').value;
      var measureUnit = document.querySelector('.unit').value;

      if (itemName.length > 0 & itemQty.length > 0) {
        itemsList.push({
          'id': generateId(),
          'name': itemName,
          'qty': itemQty + ' ' + measureUnit
        });
        document.querySelector('.add__placeholder').remove();
        admin();
        localStorage.setItem('itemsList', JSON.stringify(itemsList));
        blurUi();
      } else {
        document.querySelector('.error').innerHTML = "\n                    <p style=\"color: tomato; position: absolute; width: 400px; max-width: 95vw; font-size: 14;\"\">\n                        <code>\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F<code/>\n                    </p>\n                ";
      }
    }

    if (type == 'list') {
      var newItemName = document.querySelector('.name').value;

      if (newItemName.length > 0) {
        savedList.push({
          'id': generateId(),
          'name': newItemName,
          'list': itemsList
        });
        document.querySelector('.add__placeholder').remove();
        admin();
        localStorage.setItem('savedList', JSON.stringify(savedList));
        blurUi();
      } else {
        document.querySelector('.error').innerHTML = "\n                    <p style=\"color: tomato; position: absolute; width: 400px; max-width: 95vw; font-size: 14;\">\n                        <code>\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u043F\u0438\u0441\u043A\u0430</code>\n                    </p>\n                ";
      }
    }

    if (type == 'loadList') {
      itemsList = savedList.filter(function (item) {
        return item.id == id;
      })[0].list;
      localStorage.setItem('itemsList', JSON.stringify(itemsList));
      document.querySelector('.add__placeholder').remove();
      admin();
      blurUi();
    }

    if (type == 'delList') {
      document.getElementById(id).remove();
      savedList = savedList.filter(function (item) {
        return item.id != id;
      });
      userNotifications = userNotifications.filter(function (item) {
        return item.content.id != id;
      });
      localStorage.setItem('savedList', JSON.stringify(savedList));
      localStorage.setItem('userNotifications', JSON.stringify(userNotifications));
      document.querySelector('.add__placeholder').remove();
      toplist();
      blurUi();
    }

    if (type == 'assignList') {
      var message = document.querySelector('.message').value || 'Комментарий отсутствует';
      var notification = "\n                {\"id\": \"".concat(username, "\",\n                \"content\": {\"id\": \"").concat(id, "\",\n                \"content\": {\"from\": \"").concat(username, "\", \"list\": \"").concat(id, "\", \"message\": \"").concat(message, "\"}}}\n            ");
      userNotifications.push(JSON.parse(notification));
      localStorage.setItem('userNotifications', JSON.stringify(userNotifications));
      document.querySelector('.add__placeholder').remove();
      blurUi();
      toplist();
    }
  } else {
    document.querySelector('.add__placeholder').remove();

    if (type == 'loadList' || type == 'delList') {
      toplist();
    } else if (type == 'assignList') {
      main();
    } else {
      admin();
    }

    blurUi();
  }
}