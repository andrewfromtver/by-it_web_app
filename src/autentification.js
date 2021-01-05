/* Login/logout */
window.onload = function() {
    login();
};
function login(firstLoad = false) {
    if (firstLoad) {
        username = 'Cписок покупок'
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
function logout(type = 'none') {
    if (type == 'shutDown') {
        selectedRows = 0;
    }
    else {
        if (type == 'none') {
            if (savedList.length > 0) {
                blurUi(true);
                document.querySelector('body').innerHTML += `
                    <div class="add__placeholder">
                        <div class="add">
                            <h1>Помогите нам стать лучше</h1>
                            <p style="font-size: 12px;"><code>Вы можете помочь нам сделать приложение лучше, 
                            отправив нам свои сохраненные списки покупок.
                            Полученная информация поможет нам сделать приложение 
                            удобнее для использования. Вся передаваемая вами информация деперсонализированна
                            мы получим только ваши списки покупок, без привязки к вашим персональным данным.</code></p>
                            <div style="display: flex; flex-direction: row; justify-content: center;">
                                <button id="yes" style="background-color: #5cd8dc;"
                                    onclick="logout('yes')">
                                        Отправить
                                </button>
                                <button id="no" style="background-color: #fba29e;"
                                    onclick="logout('no')">
                                        Не отправлять
                                </button>
                            </div>
                            <div class="error"></div>
                        </div>
                    </div>
                `;
            }
            else {
                document.querySelector('.content').querySelector('button').innerHTML = `
                    <div>
                        <div style="display: flex; justify-content: center;">
                            <div class="dot-loader"></div>
                        </div>
                    </div>
                `;
                username = '';
                localStorage.removeItem('username');
                setTimeout(function() {window.location.reload()}, 1000);
            }
        }
        else if (type == 'yes') {
            document.querySelector('#yes').innerHTML = `
                <div>
                    <div style="display: flex; justify-content: center;">
                        <div class="dot-loader"></div>
                    </div>
                </div>
            `;
            sendJson(savedList);
            username = '';
            localStorage.removeItem('username');
            setTimeout(function() {window.location.reload()}, 3000);
        }
        else if (type == 'no') {
            document.querySelector('#no').innerHTML = `
                <div>
                    <div style="display: flex; justify-content: center;">
                        <div class="dot-loader"></div>
                    </div>
                </div>
            `;
            username = '';
            localStorage.removeItem('username');
            setTimeout(function() {window.location.reload()}, 1000);
        }
    }
}