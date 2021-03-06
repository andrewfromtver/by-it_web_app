//init html forms with selected lang
function initStrings(lang) {
    if (lang == 'ru') {
        defaultLang = 0;
        selectedLang = lang;
        localStorage.setItem('selectedLang', selectedLang);
    }
    else if (lang == 'en') {
        defaultLang = 1;
        selectedLang = lang;
        localStorage.setItem('selectedLang', selectedLang);
    }
    init_data = `
        <div class="login__placeholder">
            <div class="login">
                <h1>${translations[defaultLang][0]}</h1>
                <p style="font-size: 14px; text-align: left; width: 87%;">
                    ${translations[defaultLang][1]}
                </p>
                <div style="width: 100%; display: flex;">
                    <select style="padding: 0 20px; margin: 0 auto 15px auto; text-align-last: center;"
                    class="add__input unit lang-selector"
                    onchange="initApp(this.value)">
                        <option value="en">English</option>
                        <option value="ru">Русский</option>
                    </select>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center;">
                    <button
                        style="background-color: #5cd8dc; width: 80%;"
                        onclick="login(true)"
                    >
                        ${translations[defaultLang][2]}
                    </button>
                </div>
                <div class="error"></div>
            </div>
        </div>
    `;
    //autentication
    send_data_warn = `
        <div class="add__placeholder">
            <div class="add">
                <h1>${translations[defaultLang][3]}</h1>
                <p style="font-size: 14px;">
                    <code>
                        ${translations[defaultLang][4]}
                    </code>
                </p>
                <div style="display: flex; flex-direction: row; justify-content: center;">
                    <button id="yes" style="background-color: #5cd8dc;"
                        onclick="logout('yes')">
                        ${translations[defaultLang][5]}
                    </button>
                    <button id="no" style="background-color: #fba29e;"
                        onclick="logout('no')">
                        ${translations[defaultLang][6]} 
                    </button>
                </div>
                <div class="error"></div>
            </div>
        </div>
    `;
    //navbar main
    nav_main = `
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
                <h1>${translations[defaultLang][0]}</h1>
                <div class="main__img">
                    <img src="./img/logo.png" alt="main">
                </div>
                <p>${translations[defaultLang][7]}</p>
            </div>
            <div class="content">
                <button 
                    style="width: 94%; margin: 3%; background-color: #fba29e;"
                    onclick="logout()">
                        ${translations[defaultLang][8]}
                </button>
            </div>
        </div>
        <div class="footer">${translations[defaultLang][35]}</div>
    `;
    nav_main_notifications = `
        <table style="margin-top: 20px;">
            <thead>
                <tr>
                    <td class="head" colspan="3">${translations[defaultLang][9]}</td>
                </tr>
            </thead>
            <tbody class="notification__table"></tbody>
        </table>
        <button
            style="width: 94%; margin: 3%; background-color: #fba29e;"
            onclick="logout()">
                ${translations[defaultLang][8]}
        </button>
    `;
    //navbar admin
    nav_admin = `
        <div class="admin">
            <h1>${translations[defaultLang][10]}</h1>
            <table>
                <thead>
                    <tr>
                        <td class="head">${translations[defaultLang][11]}</td>
                        <td class="head" colspan="2">${translations[defaultLang][12]}</td>
                    </tr>
                </thead>
                <tbody class="admin__table"></tbody>
            </table>
            <div class="add__item">
                <img onclick="addItem()" src="./img/add.png" alt="add__item">
            </div>
        </div>
    `;
    nav_admin_save = `
        <button style="width: 94%; margin: 3%; background-color: #5cd8dc;"
            onclick="saveList()">
                ${translations[defaultLang][13]}
        </button>
    `;
    //navbar user
    nav_user = `
        <div class="admin" style="margin-bottom: 25px;">
            <h1>${translations[defaultLang][14]}</h1>
            <table>
                <thead>
                    <tr>
                        <td class="head">${translations[defaultLang][11]}</td>
                        <td class="head" colspan="2">${translations[defaultLang][12]}</td>
                    </tr>
                </thead>
                <tbody class="user__table"></tbody>
            </table>
        </div>
    `;
    //navbar topList
    nav_topList = `
        <div class="admin" style="margin-bottom: 25px;">
            <h1>${translations[defaultLang][15]}</h1>
            <table>
                <thead>
                    <tr>
                        <td class="head" colspan="4">${translations[defaultLang][11]}</td>
                    </tr>
                </thead>
                <tbody class="top__table"></tbody>
            </table>
        </div>
    `;
    nav_topList_inactive_assign = `
        <td style="background-color: #ccc; opacity: 0.5; border-radius: 3px;" class="delete">
            <img
                class="action__img"
                src="./img/assign.png"
                alt="delete__item">
        </td>
    `;
    //warn (if item checked) popup
    warn_popup = `
        <div class="add__placeholder">
            <div class="add">
                <h1>${translations[defaultLang][8]}</h1>
                <div style="display: flex; flex-direction: row; justify-content: center;">
                    <button style="background-color: #5cd8dc;"
                        onclick="hideWarn()">
                            ${translations[defaultLang][16]}
                    </button>
                    <button style="background-color: #fba29e;"
                        id="customOnclick"">
                            ${translations[defaultLang][17]}
                    </button>
                </div>
            </div>
            <div class="error">
                <p style="color: tomato; width: 400px; max-width: 95vw; font-size: 14px;">
                    <code>${translations[defaultLang][18]}</code>
                </p>
            </div>
        </div>
    `;
    //processing popups
    add_item_popup = `
        <div class="add__placeholder">
            <div class="add">
                <h1>${translations[defaultLang][19]}</h1>
                    <div class="omrs-input-group">
                        <label class="omrs-input-underlined">
                        <input
                            required
                            class="add__input name"
                            type="text"
                            maxlength="23"
                            oninput="errorCleaner()"
                        >
                        <span class="omrs-input-label">${translations[defaultLang][11]}</span>
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
                                <span class="omrs-input-label">${translations[defaultLang][12]}</span>
                            </div>
                    </div>
                    <select style="width: 41%; margin-right: 6%;"
                        class="add__input unit"
                        onchange="errorCleaner()">
                            <option id="0">${translations[defaultLang][36]}</option>
                            <option id="1">${translations[defaultLang][37]}</option>
                            <option id="2">${translations[defaultLang][38]}</option>
                            <option id="3">${translations[defaultLang][39]}</option>
                            <option id="4">${translations[defaultLang][40]}</option>
                    </select>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center;">
                    <button style="background-color: #5cd8dc;"
                        onclick="confirmAction(true)">
                            ${translations[defaultLang][20]}
                    </button>
                    <button style="background-color: #fba29e;"
                        onclick="confirmAction(false)">
                            ${translations[defaultLang][21]}
                    </button>
                </div>
                <div class="error"></div>
            </div>
        </div>
    `;
    del_item_popup = `
        <div class="add__placeholder">
            <div class="add">
                <h1>${translations[defaultLang][22]}</h1>
                <div style="display: flex; flex-direction: row; justify-content: center;">
                    <button style="background-color: #fba29e;"
                        id="delListById">
                            ${translations[defaultLang][23]}
                    </button>
                    <button style="background-color: #5cd8dc;"
                        onclick="confirmAction(false, 'loadList')">
                            ${translations[defaultLang][21]}
                    </button>
                </div>
            </div>
            <div class="error">
                <p style="color: tomato; width: 400px; max-width: 95vw; font-size: 14px;">
                    <code>${translations[defaultLang][24]}</code>
                </p>
            </div>
        </div>
    `;
    save_list_popup = `
        <div class="add__placeholder">
            <div class="add">
                <h1>${translations[defaultLang][25]}</h1>
                    <div class="omrs-input-group">
                        <label class="omrs-input-underlined">
                        <input
                            required
                            class="add__input name
                            type="text"
                            maxlength="25"
                            oninput="errorCleaner()"
                        >
                        <span class="omrs-input-label">${translations[defaultLang][26]}</span>
                    </div>
                <div style="display: flex; flex-direction: row; justify-content: center;">
                    <button style="background-color: #5cd8dc;"
                        onclick="confirmAction(true, 'list')">
                            ${translations[defaultLang][27]}
                    </button>
                    <button style="background-color: #fba29e;"
                        onclick="confirmAction(false)">
                            ${translations[defaultLang][21]}
                    </button>
                </div>
                <div class="error"></div>
            </div>
        </div>
    `;
    assign_list_popup = `
        <div class="add__placeholder">
            <div class="add">
                <h1>${translations[defaultLang][28]}</h1>
                    <div class="omrs-input-group">
                        <label class="omrs-input-underlined">
                        <input
                            required
                            class="add__input message"
                            type="text"
                            maxlength="75"
                            oninput="errorCleaner()"
                        >
                        <span class="omrs-input-label">${translations[defaultLang][29]}</span>
                    </div>
                <div style="display: flex; flex-direction: row; justify-content: center;">
                    <button style="background-color: #5cd8dc;"
                        id="assignListById">
                            ${translations[defaultLang][20]} 
                    </button>
                    <button style="background-color: #fba29e;"
                        onclick="confirmAction(false, 'loadList')">
                            ${translations[defaultLang][21]}
                    </button>
                </div>
                <div class="error"></div>
            </div>
        </div>
    `;
    use_list_popup = `
        <div class="add__placeholder">
            <div class="add">
                <h1>${translations[defaultLang][30]}</h1>
                <div style="display: flex; flex-direction: row; justify-content: center;">
                    <button style="background-color: #5cd8dc;"
                        id="useListById">
                            ${translations[defaultLang][31]}
                    </button>
                    <button style="background-color: #fba29e;"
                        id="doNotUseListById">
                            ${translations[defaultLang][21]}
                    </button>
                </div>
            </div>
            <div class="error">
                <p style="color: tomato; width: 400px; max-width: 95vw; font-size: 14px;">
                    <code>${translations[defaultLang][32]}</code>
                </p>
            </div>
        </div>
    `;
    //global
    chart_add = `
        <p>${translations[defaultLang][33]}</p>
        <div class="chart">
            <canvas id="statChart"></canvas>
        </div>
        <button style="width: 94%; margin: 3%; background-color: #fba29e;"
            onclick="logout()">
                ${translations[defaultLang][8]}
        </button>
    `;
    exit_button = `
        <button style="width: 94%; margin: 3%; background-color: #fba29e;"
            onclick="logout()">
                ${translations[defaultLang][8]}
        </button>
    `;
    empty_table = `
        <td colspan="2">¯\\_(ツ)_/¯</td>
    `;
    inbutton_loader = `
        <div>
            <div style="display: flex; justify-content: center;">
                <div class="dot-loader"></div>
            </div>
        </div>
    `;
    cm_spinner = `
        <div style="margin: 0 auto;">
            <div class="cm-spinner"></div>
        </div>
    `;
    popup_error = `
        <p style="color: tomato; position: absolute; width: 400px; max-width: 95vw; font-size: 14;"">
            <code>${translations[defaultLang][34]}<code/>
        </p>
    `;
}