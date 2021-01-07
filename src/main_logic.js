/* Itesm processing */
function addItem() {
    blurUi(true);
    document.querySelector('body').innerHTML += add_item_popup;
    setInputFilter(document.getElementById("qtyInput"), function(value) {
        return /^\d*\,?\d*$/.test(value);
    });
}
function delItem(id, type = 'item') {
    delItemId = id;
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
        document.querySelector('body').innerHTML += del_item_popup;
        document.querySelector('#delListById').onclick = function(){confirmAction(true, 'delList', id);};
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
function saveList() {
    document.querySelector('body').innerHTML += save_list_popup;
    blurUi(true);
}
function assignList(id) {
    assignListId = id;
    document.querySelector('body').innerHTML += assign_list_popup;
    document.querySelector('#assignListById').onclick = function(){confirmAction(true, 'assignList', id);};
    blurUi(true);
}
function useList(id) {
    useListId - id;
    document.querySelector('body').innerHTML += use_list_popup;
    document.querySelector('#useListById').onclick = function(){confirmAction(true, 'loadList', id);};
    document.querySelector('#doNotUseListById').onclick = function(){confirmAction(false, placeSwitch);};
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
                document.querySelector('.error').innerHTML = popup_error;
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
                document.querySelector('.error').innerHTML = popup_error;
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
                {"id": "${deviceInfo}",
                "content": {"id": "${id}",
                "content": {"from": "${deviceInfo}", "list": "${id}", "message": "${message}"}}}
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