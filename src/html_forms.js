//init
const init_data = `
    <div class="login__placeholder">
        <div class="login">
            <h1>Список покупок</h1>
            <p style="font-size: 14px;">
                <code>1 - составляйте списки покупок<br>
                <br>
                2 - отмечайте покупки в списке<br>
                <br>
                3 - сохраняйте избраные списки<br>
                <br>
                4 - устанавливайте напоминания</code>
            </p>
            <div style="display: flex; flex-direction: row; justify-content: center;">
                <button
                    style="background-color: #5cd8dc; width: 80%;"
                    onclick="login(true)"
                >
                    Перейти к покупкам
                </button>
            </div>
            <div class="error"></div>
        </div>
    </div>
`;
//autentication
const send_data_warn = `
    <div class="add__placeholder">
        <div class="add">
            <h1>Помогите нам стать лучше</h1>
            <p style="font-size: 14px;"><code>Вы можете помочь нам сделать приложение лучше, 
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
//navbar main
const nav_main = `
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
                    Завершить покупки
            </button>
        </div>
    </div>
    <div class="footer">Copyright © 2020 Andranik Sarkisyan</div>
`;
const nav_main_notifications = `
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
            Завершить покупки
    </button>
`;
//navbar admin
const nav_admin = `
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
const nav_admin_save = `
    <button style="width: 94%; margin: 3%; background-color: #5cd8dc;"
        onclick="saveList()">
            Сохранить список в избранное
    </button>
`;
//navbar user
const nav_user = `
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
//navbar topList
const nav_topList = `
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
const nav_topList_inactive_assign = `
    <td style="background-color: #ccc; opacity: 0.5; border-radius: 3px;" class="delete">
        <img
            class="action__img"
            src="./img/assign.png"
            alt="delete__item">
    </td>
`;
//warn (if item checked) popup
const warn_popup = `
    <div class="add__placeholder">
        <div class="add">
            <h1>Завершение покупки</h1>
            <div style="display: flex; flex-direction: row; justify-content: center;">
                <button style="background-color: #5cd8dc;"
                    onclick="hideWarn()">
                        Отмена
                </button>
                <button style="background-color: #fba29e;"
                    id="customOnclick"">
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
//processing popups
const add_item_popup = `
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
                                maxlength="5"
                                id="qtyInput"
                                type="text" inputmode="numeric"
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
const del_item_popup = `
    <div class="add__placeholder">
        <div class="add">
            <h1>Удалить список</h1>
            <div style="display: flex; flex-direction: row; justify-content: center;">
                <button style="background-color: #fba29e;"
                    id="delListById">
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
const save_list_popup = `
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
const assign_list_popup = `
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
                    id="assignListById">
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
const use_list_popup = `
    <div class="add__placeholder">
        <div class="add">
            <h1>Загрузить список</h1>
            <div style="display: flex; flex-direction: row; justify-content: center;">
                <button style="background-color: #5cd8dc;"
                    id="useListById">
                        Загрузить
                </button>
                <button style="background-color: #fba29e;"
                    id="doNotUseListById">
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
//global
const chart_add = `
    <p>Основные показатели</p>
    <div class="chart">
        <canvas id="statChart"></canvas>
    </div>
    <button style="width: 94%; margin: 3%; background-color: #fba29e;"
        onclick="logout()">
            Завершить покупки
    </button>
`;
const exit_button = `
    <button style="width: 94%; margin: 3%; background-color: #fba29e;"
        onclick="logout()">
            Завершить покупки
    </button>
`;
const empty_table = `
    <td colspan="2">¯\\_(ツ)_/¯</td>
`;
const inbutton_loader = `
    <div>
        <div style="display: flex; justify-content: center;">
            <div class="dot-loader"></div>
        </div>
    </div>
`;
const cm_spinner = `
    <div style="margin: 0 auto;">
        <div class="cm-spinner"></div>
    </div>
`;
const popup_error = `
    <p style="color: tomato; position: absolute; width: 400px; max-width: 95vw; font-size: 14;"">
        <code>Заполните все поля<code/>
    </p>
`;