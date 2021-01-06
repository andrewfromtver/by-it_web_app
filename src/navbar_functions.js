/* Navbar functions */
function main() {
    placeSwitch = 'assignList';
    if (selectedRows > 0) {
        warnPopup('main');
        return;
    }
    document.querySelector('body').innerHTML = `
        <div class="navbar">
            <div class="navlinks">
                <div class="navlink" id="main" onclick="main()">
                    <img class="navlink__img" width="25px" src="./img/home.png">
                </div>
                <div class="navlink" id="admin" onclick="admin()">
                    <img class="navlink__img" width="25px" src="./img/list.png">
                </div>
                <div class="navlink" id="user" onclick="user()">
                    <img class="navlink__img" width="25px" src="./img/buy.png">
                </div>
                <div class="navlink" id="top" onclick="toplist()">
                    <img class="navlink__img" width="25px" src="./img/top.png">
                </div>
            </div>
        </div>
        <div class="app__data">
            <div class="container">
                <h1>${username}</h1>
                <div class="main__img">
                    <img src="./img/logo.png" alt="main">
                </div>
                <p>Сервис для составления списка покупок</p>
            </div>
            <div class="content">
                <button 
                    style="width: 94%; margin: 3%; background-color: #fba29e;"
                    onclick="logout()">
                        Закончить шоппинг
                </button>
            </div>
        </div>
        <div class="footer">Copyright © 2020 Andranik Sarkisyan</div>
    `;
    if (userNotifications.length > 0) {
        var notificationInner = `
            <table style="margin-top: 20px;">
                <thead>
                    <tr>
                        <td class="head" colspan="3">Напоминания</td>
                    </tr>
                </thead>
                <tbody class="notification__table"></tbody>
            </table>
            <button
                style="width: 94%; margin: 3%; background-color: #fba29e;"
                onclick="logout()">
                    Закончить шоппинг
            </button>
        `;
        document.querySelector('.content').innerHTML = notificationInner;
        notificationInner = '';
        userNotifications.forEach(function(e){
            if (e.id == username) {
                notificationInner += `
                    <tr id="${e.content.id}">
                        <td class="item__name" style="text-align: center;">
                            <code>${e.content.content.message}</code>
                        </td>
                        <td style="background-color: #5cd8dc; border-radius: 0;" class="delete">
                            <img onclick="useList('${e.content.content.list}')"
                                class="action__img"
                                src="./img/use.png"
                                alt="delete__item">
                        </td>
                        <td class="delete">
                            <img onclick="delItem('${e.content.id}', 'onlyNotyf')"
                                class="action__img"
                                src="./img/delete.png"
                                alt="delete__item">
                        </td>
                    </tr>
                `;
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
    document.querySelector('.container').innerHTML = `
        <div class="admin">
            <h1>Редактировать список</h1>
            <table>
                <thead>
                    <tr>
                        <td class="head">Наименование</td>
                        <td class="head" colspan="2">Кол-во</td>
                    </tr>
                </thead>
                <tbody class="admin__table"></tbody>
            </table>
            <div class="add__item">
                <img onclick="addItem()" src="./img/add.png" alt="add__item">
            </div>
        </div>
    `;
    if (itemsList.length > 0) {
        var inner = '';
        itemsList.forEach(function(e) {
            inner += `
                <tr id="${e.id}">
                    <td class="item__name">
                        <code>${e.name}</code>
                    </td>
                    <td>
                        <code>${e.qty}</code>
                    </td>
                    <td class="delete">
                        <img onclick="delItem('${e.id}')"
                            class="action__img"
                            src="./img/delete.png"
                            alt="delete__item">
                    </td>
                </tr>
            `;        
        });
        document.querySelector('.admin__table').innerHTML = inner;
        if (itemsList.length > 1) {
            document.querySelector('.admin').innerHTML += `
                <button style="width: 94%; margin: 3%; background-color: #5cd8dc;"
                    onclick="saveList()">
                        Сохранить список в избранное
                </button>
            `;
        }
    }
    document.querySelector('.content').innerHTML = `
        <button style="width: 94%; margin: 3%; background-color: #fba29e;"
            onclick="logout()">
                Закончить шоппинг
        </button>
    `;
    if (document.querySelector('.admin__table').rows.length > 0) {
        document.querySelector('.content').innerHTML = `
            <p>Основные показатели</p>
            <div class="chart">
                <canvas id="statChart"></canvas>
            </div>
            <button style="width: 94%; margin: 3%; background-color: #fba29e;"
                onclick="logout()">
                    Закончить шоппинг
            </button>
        `;
        const itemsCollection = document.querySelector('.admin__table').rows;
        var qty = itemsCollection.length;
        var itemsQty = 0;
        for (let index = 0; index < qty; index++) {
            itemsQty += Number(document.querySelector('.admin__table')
                .rows[index].querySelectorAll('td')[1].innerText.split(' ')[0]);
        }
        const ctx = document.getElementById('statChart').getContext('2d');
        const chart = new Chart(ctx, {
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
    }
    else {
        document.querySelector('.admin__table').innerHTML += `
            <td colspan="2">¯\\_(ツ)_/¯</td>
        `;
    }
    activeitem('admin');
}
function user() {
    if (selectedRows > 0) {
        warnPopup('user');
        return;
    }
    document.querySelector('.container').innerHTML = `
        <div class="admin" style="margin-bottom: 25px;">
            <h1>Купить по списку</h1>
            <table>
                <thead>
                    <tr>
                        <td class="head">Наименование</td>
                        <td class="head" colspan="2">Кол-во</td>
                    </tr>
                </thead>
                <tbody class="user__table"></tbody>
            </table>
        </div>
    `;
    if (itemsList.length > 0) {
        var inner = '';
        itemsList.forEach(function(e) {
            inner += `
                <tr id="${e.id}">
                    <td class="item__name">
                        <code>${e.name}</code>
                    </td>
                    <td>
                        <code>${e.qty}</code>
                    </td>
                    <td class="delete">
                        <img onclick="check('${e.id}')"
                            class="action__img"
                            src="./img/delete.png"
                            alt="delete__item">
                    </td>
                </tr>
            `;        
        });
        document.querySelector('.user__table').innerHTML = inner;
    }
    document.querySelector('.content').innerHTML = `
        <button style="width: 94%; margin: 3%; background-color: #fba29e;"
            onclick="logout()">
                Закончить шоппинг
        </button>
    `;
    if (document.querySelector('.user__table').rows.length > 0) {
        document.querySelector('.content').innerHTML = `
            <p>Основные показатели</p>
            <div class="chart">
                <canvas id="statChart"></canvas>
            </div>
            <button style="width: 94%; margin: 3%; background-color: #fba29e;"
                onclick="logout()">
                    Закончить шоппинг
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
    else {
        document.querySelector('.user__table').innerHTML += `
            <td colspan="2">¯\\_(ツ)_/¯</td>
        `;
    }
    activeitem('user');
}
function toplist() {
    placeSwitch = 'loadList';
    if (selectedRows > 0) {
        warnPopup('toplist');
        return;
    }
    document.querySelector('.container').innerHTML = `
        <div class="admin" style="margin-bottom: 25px;">
            <h1>Сохраненные списки</h1>
            <table>
                <thead>
                    <tr>
                        <td class="head" colspan="4">Наименование</td>
                    </tr>
                </thead>
                <tbody class="top__table"></tbody>
            </table>
        </div>
    `;
    if (savedList.length > 0) {
        var inner = '';
        savedList.forEach(function(e) {
            inner += `
                <tr id="${e.id}">
                    <td class="item__name">
                        <code>${e.name}</code>
                    </td>
                    <td style="background-color: #5cd8dc; border-radius: 3px;" class="delete">
                        <img onclick="useList('${e.id}')"
                            class="action__img"
                            src="./img/use.png"
                            alt="delete__item">
                    </td>
            `;
            var checkIndex = [];
            userNotifications.forEach(function(e){
                checkIndex.push(e.content.id);
            })
            if (checkIndex.indexOf(e.id) == -1) {
                inner += `
                    <td style="background-color: #5cd8dc; border-radius: 3px;" class="delete">
                        <img onclick="assignList('${e.id}')"
                            class="action__img"
                            src="./img/assign.png"
                            alt="delete__item">
                    </td>
                `;
            } else {
                inner += `
                    <td style="background-color: #ccc; opacity: 0.5; border-radius: 3px;" class="delete">
                        <img
                            class="action__img"
                            src="./img/assign.png"
                            alt="delete__item">
                    </td>
                `;
            }
            inner +=`
                    <td class="delete">
                        <img onclick="delItem('${e.id}', 'list')"
                            class="action__img"
                            src="./img/delete.png"
                            alt="delete__item">
                    </td>
                </tr>
            `;        
        });
        document.querySelector('.top__table').innerHTML = inner;
    }
    else {
        document.querySelector('.top__table').innerHTML += `
            <td colspan="2">¯\\_(ツ)_/¯</td>
        `;
    }
    document.querySelector('.content').innerHTML = `
        <button style="width: 94%; margin: 3%; background-color: #fba29e;"
            onclick="logout()">
                Закончить шоппинг
        </button>
    `;
    activeitem('top');
}