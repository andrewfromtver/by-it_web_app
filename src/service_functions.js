/* Restricts input for the given textbox to the given inputFilter */
function setInputFilter(textbox, inputFilter) {
    ["input",
    "keydown",
    "keyup",
    "mousedown",
    "mouseup",
    "select",
    "contextmenu",
    "drop"].forEach(function(event) {
        textbox.addEventListener(event, function() {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } 
            else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } 
            else {
                this.value = "";
            }
        });
    });
}
/* Window resize on mobile browsers */
document.documentElement.style.setProperty('--vh', vh + 'px');
window.addEventListener('resize', function() {
  function init() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
  }
  setTimeout(init, 75);
});
/* Blur UI on popup */
function blurUi(toggle = false) {
    if (toggle) {
        document.querySelector('.navbar').style = 'filter: blur(8px); opacity: 0.7;';
        document.querySelector('.container').style = 'filter: blur(8px); opacity: 0.7;';
        document.querySelector('.content').style = 'filter: blur(8px); opacity: 0.7;';
        document.querySelector('.footer').style = 'filter: blur(8px); opacity: 0.7;';
    }
    else {
        document.querySelector('.navbar').style = '';
        document.querySelector('.container').style = '';
        document.querySelector('.content').style = '';
        document.querySelector('.footer').style = '';
    }
}
/* Preload images & init */
function preloadMedia() {
    document.querySelector('.login__placeholder').innerHTML = `
        <div style="margin: 0 auto;">
            <div class="cm-spinner"></div>
        </div>
    `;
    setTimeout(main, 3000);
}
/* Active navbar item */
function activeitem(name = 'main') {
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
function hideWarn(type = false) {
    document.querySelector('.add__placeholder').remove();
    blurUi();
    if (type) {
        selectedRows = 0;
        selectedItems = 0;
        window[type]();
    }
    else {
        const itemsCollection = document.querySelector('.user__table').rows;
        const qty = itemsCollection.length;
        var itemsQty = 0;
        for (let index = 0; index < qty; index++) {
            itemsQty += Number(document.querySelector('.user__table')
                .rows[index].querySelectorAll('td')[1].innerText);
        }
        const ctx = document.getElementById('statChart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Позиции'],
                datasets: [{
                    label: 'План',
                    backgroundColor: '#5cd8dc',
                    data: [qty,itemsQty, 0]
                },{
                    label: 'Факт',
                    backgroundColor: '#fba29e',
                    data: [selectedRows,selectedItems, 0]
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
function warnPopup(type = 'main') {
    blurUi(true);
    var functionName = `hideWarn('${type}')`;
    if (type == 'logout') {
        functionName = `logout('shutDown')`;
    }
    document.querySelector('body').innerHTML += `
    <div class="add__placeholder">
        <div class="add">
            <h1>Завершение покупки</h1>
            <div style="display: flex; flex-direction: row; justify-content: center;">
                <button style="background-color: #5cd8dc;"
                    onclick="hideWarn()">
                        Отмена
                </button>
                <button style="background-color: #fba29e;"
                    onclick="${functionName}">
                        Завершить
                </button>
            </div>
        </div>
        <div class="error">
            <p style="color: tomato; width: 400px; max-width: 95vw; font-size: 14px;">
                <code>Текущий прогресс будет утерян</code>
            </p>
        </div>
    </div>
    `;
}
/* Clear error notification */
function errorCleaner() {
    document.querySelector('.error').innerHTML = '';
}
/* Back button */
