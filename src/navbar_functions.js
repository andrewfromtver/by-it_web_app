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
        userNotifications.forEach(function(e){
            if (e.id == deviceInfo) {
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
    document.querySelector('.container').innerHTML = nav_admin;
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
            document.querySelector('.admin').innerHTML += nav_admin_save;
        }
    }
    document.querySelector('.content').innerHTML = exit_button;
    if (document.querySelector('.admin__table').rows.length > 0) {
        document.querySelector('.content').innerHTML = chart_add;
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
    document.querySelector('.content').innerHTML = exit_button;
    if (document.querySelector('.user__table').rows.length > 0) {
        document.querySelector('.content').innerHTML = chart_add;
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
                inner += nav_topList_inactive_assign;
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
        document.querySelector('.top__table').innerHTML += empty_table;
    }
    document.querySelector('.content').innerHTML = exit_button;
    activeitem('top');
}