"use strict";

/* Restricts input for the given textbox to the given inputFilter */
function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
    textbox.addEventListener(event, function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}
/* Window resize on mobile browsers */


document.documentElement.style.setProperty('--vh', vh + 'px');
window.addEventListener('resize', function () {
  function init() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
  }

  setTimeout(init, 75);
});
/* Blur UI on popup */

function blurUi() {
  let toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (toggle) {
    document.querySelector('.navbar').style = 'filter: blur(5px); opacity: 0.75;';
    document.querySelector('.container').style = 'filter: blur(5px); opacity: 0.75;';
    document.querySelector('.content').style = 'filter: blur(5px); opacity: 0.75;';
    document.querySelector('.footer').style = 'filter: blur(5px); opacity: 0.75;';
  } else {
    document.querySelector('.navbar').style = '';
    document.querySelector('.container').style = '';
    document.querySelector('.content').style = '';
    document.querySelector('.footer').style = '';
  }
}
/* Preload images & init */


function preloadMedia() {
  document.querySelector('.login__placeholder').innerHTML = "\n        <div style=\"margin: 0 auto;\">\n            <div class=\"cm-spinner\"></div>\n        </div>\n    ";
  setTimeout(main, 3000);
}
/* Active navbar item */


function activeitem() {
  let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'main';

  if (name == 'main') {
    document.querySelector('#main').style.backgroundColor = '#5cd8dc';
    document.querySelector('#admin').style.backgroundColor = '';
    document.querySelector('#user').style.backgroundColor = '';
    document.querySelector('#top').style.backgroundColor = '';
    document.querySelector('#main').style.boxShadow = '0px 0px 10px rgb(92, 216, 220)';
    document.querySelector('#admin').style.boxShadow = '';
    document.querySelector('#user').style.boxShadow = '';
    document.querySelector('#top').style.boxShadow = '';
  }

  if (name == 'admin') {
    document.querySelector('#main').style.backgroundColor = '';
    document.querySelector('#admin').style.backgroundColor = '#5cd8dc';
    document.querySelector('#user').style.backgroundColor = '';
    document.querySelector('#top').style.backgroundColor = '';
    document.querySelector('#main').style.boxShadow = '';
    document.querySelector('#admin').style.boxShadow = '0px 0px 10px rgb(92, 216, 220)';
    document.querySelector('#user').style.boxShadow = '';
    document.querySelector('#top').style.boxShadow = '';
  }

  if (name == 'user') {
    document.querySelector('#main').style.backgroundColor = '';
    document.querySelector('#admin').style.backgroundColor = '';
    document.querySelector('#user').style.backgroundColor = '#5cd8dc';
    document.querySelector('#top').style.backgroundColor = '';
    document.querySelector('#main').style.boxShadow = '';
    document.querySelector('#admin').style.boxShadow = '';
    document.querySelector('#user').style.boxShadow = '0px 0px 10px rgb(92, 216, 220)';
    document.querySelector('#top').style.boxShadow = '';
  }

  if (name == 'top') {
    document.querySelector('#main').style.backgroundColor = '';
    document.querySelector('#admin').style.backgroundColor = '';
    document.querySelector('#user').style.backgroundColor = '';
    document.querySelector('#top').style.backgroundColor = '#5cd8dc';
    document.querySelector('#main').style.boxShadow = '';
    document.querySelector('#admin').style.boxShadow = '';
    document.querySelector('#user').style.boxShadow = '';
    document.querySelector('#top').style.boxShadow = '0px 0px 10px rgb(92, 216, 220)';
  }

  activetab = name;
}
/* Warn Popup */


function hideWarn() {
  let type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  document.querySelector('.add__placeholder').remove();
  blurUi();

  if (type) {
    selectedRows = 0;
    selectedItems = 0;
    window[type]();
  } else {
    const itemsCollection = document.querySelector('.user__table').rows;
    const qty = itemsCollection.length;
    var itemsQty = 0;

    for (let index = 0; index < qty; index++) {
      itemsQty += Number(document.querySelector('.user__table').rows[index].querySelectorAll('td')[1].innerText);
    }

    const ctx = document.getElementById('statChart').getContext('2d');
    const chart = new Chart(ctx, {
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
}

function warnPopup() {
  let type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'main';
  blurUi(true);
  var functionName = "hideWarn('".concat(type, "')");

  if (type == 'logout') {
    functionName = "logout('shutDown')";
  }

  document.querySelector('body').innerHTML += "\n    <div class=\"add__placeholder\">\n        <div class=\"add\">\n            <h1>\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0435 \u043F\u043E\u043A\u0443\u043F\u043A\u0438</h1>\n            <div style=\"display: flex; flex-direction: row; justify-content: center;\">\n                <button style=\"background-color: #5cd8dc;\"\n                    onclick=\"hideWarn()\">\n                        \u041E\u0442\u043C\u0435\u043D\u0430\n                </button>\n                <button style=\"background-color: #fba29e;\"\n                    onclick=\"".concat(functionName, "\">\n                        \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C\n                </button>\n            </div>\n        </div>\n        <div class=\"error\">\n            <p style=\"color: tomato; width: 400px; max-width: 95vw;\">\n                <code>\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0431\u0443\u0434\u0435\u0442 \u0443\u0442\u0435\u0440\u044F\u043D</code>\n            </p>\n        </div>\n    </div>\n    ");
}
/* Clear error notification */


function errorCleaner() {
  document.querySelector('.error').innerHTML = '';
}