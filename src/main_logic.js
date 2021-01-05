/* Itesm processing */
function addItem() {
    blurUi(true);
    document.querySelector('body').innerHTML += `
    <div class="add__placeholder">
        <div class="add">
            <h1>В список покупок</h1>
                <div class="omrs-input-group">
                    <label class="omrs-input-underlined">
                    <input
                        required
                        class="add__input name"
                        type="text"
                        maxlength="23"
                        oninput="errorCleaner()"
                    >
                    <span class="omrs-input-label">Наименование</span>
                </div>
            <div style="display: flex; flex-direction: row; justify-content: space-between;">
                <div style="margin-left: 3%; width: 47%;">
                        <div class="omrs-input-group">
                            <label class="omrs-input-underlined">
                            <input
                                required
                                class="add__input qty"
                                id="qtyInput"
                                type="text" inputmode="numeric"
                                maxlength="6"
                                oninput="errorCleaner()"
                            >
                            <span class="omrs-input-label">Кол-во</span>
                        </div>
                </div>
                <select style="width: 41%; margin-right: 6%;"
                    class="add__input unit"
                    placeholder="Имя пользователя"
                    onchange="errorCleaner()">
                        <option id="0">шт</option>
                        <option id="1">кг</option>
                        <option id="2">г</option>
                        <option id="3">л</option>
                        <option id="4">мл</option>
                </select>
            </div>
            <div style="display: flex; flex-direction: row; justify-content: center;">
                <button style="background-color: #5cd8dc;"
                    onclick="confirmAction(true)">
                        Добавить
                </button>
                <button style="background-color: #fba29e;"
                    onclick="confirmAction(false)">
                        Отмена
                </button>
            </div>
            <div class="error"></div>
        </div>
    </div>
    `;
    setInputFilter(document.getElementById("qtyInput"), function(value) {
        return /^\d*\d*$/.test(value);
    });
}
function delItem(id, type = 'item') {
    if (type == 'item') {
        document.getElementById(id).remove();
        itemsList =  itemsList.filter(item => item.id != id);
        localStorage.setItem('itemsList', JSON.stringify(itemsList));
        admin();
    }
    if (type == 'onlyNotyf') {
        userNotifications =  userNotifications.filter(item => item.content.id != id);
        localStorage.setItem('userNotifications', JSON.stringify(userNotifications));
        main();
    }
    if (type == 'list') {
        document.querySelector('body').innerHTML += `
            <div class="add__placeholder">
                <div class="add">
                    <h1>Удалить список</h1>
                    <div style="display: flex; flex-direction: row; justify-content: center;">
                        <button style="background-color: #fba29e;"
                            onclick="confirmAction(true, 'delList', '${id}')">
                                Удалить
                        </button>
                        <button style="background-color: #5cd8dc;"
                            onclick="confirmAction(false, 'loadList')">
                                Отмена
                        </button>
                    </div>
                </div>
                <div class="error">
                    <p style="color: tomato; width: 400px; max-width: 95vw; font-size: 14px;">
                        <code>Список также будет удалён из напоминаний</code>
                    </p>
                </div>
            </div>
        `;
        blurUi(true);
    }
}
function check(id) {
    const element = document.getElementById(id).style;
    if (element.textDecoration == 'line-through' && element.opacity == '0.45') {
        element.textDecoration = '';
        element.opacity = '';
        selectedRows -= 1;
        selectedItems -= Number(document.getElementById(id)
            .querySelectorAll('td')[1].innerText);
    }
    else {
        element.textDecoration = 'line-through';
        element.opacity = '0.45';
        selectedRows += 1;
        selectedItems += Number(document.getElementById(id)
            .querySelectorAll('td')[1].innerText);
    }
    document.querySelector('.content').innerHTML = `
        <p>Основные показатели</p>
        <div class="chart">
            <canvas id="statChart"></canvas>
        </div>
        <button style="width: 94%; margin: 3%; background-color: #fba29e;"
            onclick="logout()">
                Завершить покупки
        </button>
    `;
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
function saveList() {
    document.querySelector('body').innerHTML += `
        <div class="add__placeholder">
            <div class="add">
                <h1>Сохранить список</h1>
                    <div class="omrs-input-group">
                        <label class="omrs-input-underlined">
                        <input
                            required
                            class="add__input name
                            type="text"
                            maxlength="25"
                            oninput="errorCleaner()"
                        >
                        <span class="omrs-input-label">Название</span>
                    </div>
                <div style="display: flex; flex-direction: row; justify-content: center;">
                    <button style="background-color: #5cd8dc;"
                        onclick="confirmAction(true, 'list')">
                            Сохранить
                    </button>
                    <button style="background-color: #fba29e;"
                        onclick="confirmAction(false)">
                            Отмена
                    </button>
                </div>
                <div class="error"></div>
            </div>
        </div>
    `;
    blurUi(true);
}
function assignList(id) {
    document.querySelector('body').innerHTML += `
        <div class="add__placeholder">
            <div class="add">
                <h1>Добавить напоминание</h1>
                    <div class="omrs-input-group">
                        <label class="omrs-input-underlined">
                        <input
                            required
                            class="add__input message"
                            type="text"
                            maxlength="75"
                            oninput="errorCleaner()"
                        >
                        <span class="omrs-input-label">Комментарий</span>
                    </div>
                <div style="display: flex; flex-direction: row; justify-content: center;">
                    <button style="background-color: #5cd8dc;"
                        onclick="confirmAction(true, 'assignList', '${id}')">
                            Добавить
                    </button>
                    <button style="background-color: #fba29e;"
                        onclick="confirmAction(false, 'loadList')">
                            Отмена
                    </button>
                </div>
                <div class="error"></div>
            </div>
        </div>
    `;
    blurUi(true);
}
function useList(id) {
    document.querySelector('body').innerHTML += `
    <div class="add__placeholder">
        <div class="add">
            <h1>Загрузить список</h1>
            <div style="display: flex; flex-direction: row; justify-content: center;">
                <button style="background-color: #5cd8dc;"
                    onclick="confirmAction(true, 'loadList', '${id}')">
                        Загрузить
                </button>
                <button style="background-color: #fba29e;"
                    onclick="confirmAction(false, '${placeSwitch}')">
                        Отмена
                </button>
            </div>
        </div>
        <div class="error">
            <p style="color: tomato; width: 400px; max-width: 95vw; font-size: 14px;">
                <code>Текущий список покупок будет изменён</code>
            </p>
        </div>
    </div>
    `;
    blurUi(true);
}
function confirmAction(save, type = null, id = null) {
    const generateId = () => `${Math.round(Math.random() * 1e8).toString(16)}`;
    if (save == true) {
        if (!type) {
            const itemName = document.querySelector('.name').value;
            const itemQty = document.querySelector('.qty').value;
            const measureUnit = document.querySelector('.unit').value;
            if (itemName.length > 0 & itemQty.length > 0) {
                itemsList.push({'id': generateId(), 'name': itemName, 'qty': itemQty +
                    ' ' + measureUnit});
                document.querySelector('.add__placeholder').remove();
                admin();
                localStorage.setItem('itemsList', JSON.stringify(itemsList));
                blurUi();
            }
            else {
                document.querySelector('.error').innerHTML = `
                    <p style="color: tomato; position: absolute; width: 400px; max-width: 95vw; font-size: 14;"">
                        <code>Заполните все поля<code/>
                    </p>
                `;
            }
        }
        if (type == 'list') {
            var newItemName = document.querySelector('.name').value;
            if (newItemName.length > 0) {
                savedList.push({'id': generateId(), 'name': newItemName, 'list': itemsList});
                document.querySelector('.add__placeholder').remove();
                admin();
                localStorage.setItem('savedList', JSON.stringify(savedList));
                blurUi();
            }
            else {
                document.querySelector('.error').innerHTML = `
                    <p style="color: tomato; position: absolute; width: 400px; max-width: 95vw; font-size: 14;">
                        <code>Укажите название списка</code>
                    </p>
                `;
            }
        }
        if (type == 'loadList') {
            itemsList = savedList.filter(item => item.id == id)[0].list;
            localStorage.setItem('itemsList', JSON.stringify(itemsList));
            document.querySelector('.add__placeholder').remove();
            admin();
            blurUi();
        }
        if (type == 'delList') {
            document.getElementById(id).remove();
            savedList = savedList.filter(item => item.id != id);
            userNotifications = userNotifications.filter(item => item.content.id != id);
            localStorage.setItem('savedList', JSON.stringify(savedList));
            localStorage.setItem('userNotifications', JSON.stringify(userNotifications));
            document.querySelector('.add__placeholder').remove();
            toplist();
            blurUi();
        }
        if (type == 'assignList') {
            var message = document.querySelector('.message')
                .value  || 'Комментарий отсутствует';
            var notification = `
                {"id": "${username}",
                "content": {"id": "${id}",
                "content": {"from": "${username}", "list": "${id}", "message": "${message}"}}}
            `;
            userNotifications.push(JSON.parse(notification));
            localStorage.setItem('userNotifications', JSON.stringify(userNotifications));
            document.querySelector('.add__placeholder').remove();
            blurUi();
            toplist();
        }
    }
    else {
        document.querySelector('.add__placeholder').remove();
        if (type =='loadList' || type =='delList') {
            toplist();
        }
        else if (type == 'assignList') {
            main();
        }
        else {
            admin();
        }
        blurUi();
    }
}