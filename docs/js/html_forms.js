"use strict";var init_data,send_data_warn,nav_main,nav_main_notifications,nav_admin,nav_admin_save,nav_user,nav_topList,nav_topList_inactive_assign,warn_popup,add_item_popup,del_item_popup,save_list_popup,assign_list_popup,use_list_popup,chart_add,exit_button,empty_table,inbutton_loader,cm_spinner,popup_error,selectedLang;selectedLang=localStorage.selectedLang?localStorage.selectedLang:"ru";//init
function initStrings(a){//autentication
//navbar main
//navbar admin
//navbar user
//navbar topList
//warn (if item checked) popup
//processing popups
//global
"ru"==a?(defaultLang=0,selectedLang=a,localStorage.setItem("selectedLang",selectedLang)):"en"==a&&(defaultLang=1,selectedLang=a,localStorage.setItem("selectedLang",selectedLang)),init_data="\n        <div class=\"login__placeholder\">\n            <div class=\"login\">\n                <h1>".concat(translations[defaultLang][0],"</h1>\n                <p style=\"font-size: 14px;\">\n                    ").concat(translations[defaultLang][1],"\n                </p>\n                <select style=\"width: 30%; margin: 0 35% 15px; text-align-last:center; padding: 0;\"\n                class=\"add__input unit lang-selector\"\n                onchange=\"initApp(this.value)\">\n                    <option value=\"en\">English</option>\n                    <option value=\"ru\">\u0420\u0443\u0441\u0441\u043A\u0438\u0439</option>\n                </select>\n                <div style=\"display: flex; flex-direction: row; justify-content: center;\">\n                    <button\n                        style=\"background-color: #5cd8dc; width: 80%;\"\n                        onclick=\"login(true)\"\n                    >\n                        ").concat(translations[defaultLang][2],"\n                    </button>\n                </div>\n                <div class=\"error\"></div>\n            </div>\n        </div>\n    "),send_data_warn="\n        <div class=\"add__placeholder\">\n            <div class=\"add\">\n                <h1>".concat(translations[defaultLang][3],"</h1>\n                <p style=\"font-size: 14px;\">\n                    <code>\n                        ").concat(translations[defaultLang][4],"\n                    </code>\n                </p>\n                <div style=\"display: flex; flex-direction: row; justify-content: center;\">\n                    <button id=\"yes\" style=\"background-color: #5cd8dc;\"\n                        onclick=\"logout('yes')\">\n                        ").concat(translations[defaultLang][5],"\n                    </button>\n                    <button id=\"no\" style=\"background-color: #fba29e;\"\n                        onclick=\"logout('no')\">\n                        ").concat(translations[defaultLang][6]," \n                    </button>\n                </div>\n                <div class=\"error\"></div>\n            </div>\n        </div>\n    "),nav_main="\n        <div class=\"navbar\">\n            <div class=\"navlinks\">\n                <div class=\"navlink\" id=\"main\" onclick=\"main()\">\n                    <img class=\"navlink__img\" width=\"25px\" src=\"./img/home.png\">\n                </div>\n                <div class=\"navlink\" id=\"admin\" onclick=\"admin()\">\n                    <img class=\"navlink__img\" width=\"25px\" src=\"./img/list.png\">\n                </div>\n                <div class=\"navlink\" id=\"user\" onclick=\"user()\">\n                    <img class=\"navlink__img\" width=\"25px\" src=\"./img/buy.png\">\n                </div>\n                <div class=\"navlink\" id=\"top\" onclick=\"toplist()\">\n                    <img class=\"navlink__img\" width=\"25px\" src=\"./img/top.png\">\n                </div>\n            </div>\n        </div>\n        <div class=\"app__data\">\n            <div class=\"container\">\n                <h1>".concat(translations[defaultLang][0],"</h1>\n                <div class=\"main__img\">\n                    <img src=\"./img/logo.png\" alt=\"main\">\n                </div>\n                <p>").concat(translations[defaultLang][7],"</p>\n            </div>\n            <div class=\"content\">\n                <button \n                    style=\"width: 94%; margin: 3%; background-color: #fba29e;\"\n                    onclick=\"logout()\">\n                        ").concat(translations[defaultLang][8],"\n                </button>\n            </div>\n        </div>\n        <div class=\"footer\">").concat(translations[defaultLang][35],"</div>\n    "),nav_main_notifications="\n        <table style=\"margin-top: 20px;\">\n            <thead>\n                <tr>\n                    <td class=\"head\" colspan=\"3\">".concat(translations[defaultLang][9],"</td>\n                </tr>\n            </thead>\n            <tbody class=\"notification__table\"></tbody>\n        </table>\n        <button\n            style=\"width: 94%; margin: 3%; background-color: #fba29e;\"\n            onclick=\"logout()\">\n                ").concat(translations[defaultLang][8],"\n        </button>\n    "),nav_admin="\n        <div class=\"admin\">\n            <h1>".concat(translations[defaultLang][10],"</h1>\n            <table>\n                <thead>\n                    <tr>\n                        <td class=\"head\">").concat(translations[defaultLang][11],"</td>\n                        <td class=\"head\" colspan=\"2\">").concat(translations[defaultLang][12],"</td>\n                    </tr>\n                </thead>\n                <tbody class=\"admin__table\"></tbody>\n            </table>\n            <div class=\"add__item\">\n                <img onclick=\"addItem()\" src=\"./img/add.png\" alt=\"add__item\">\n            </div>\n        </div>\n    "),nav_admin_save="\n        <button style=\"width: 94%; margin: 3%; background-color: #5cd8dc;\"\n            onclick=\"saveList()\">\n                ".concat(translations[defaultLang][13],"\n        </button>\n    "),nav_user="\n        <div class=\"admin\" style=\"margin-bottom: 25px;\">\n            <h1>".concat(translations[defaultLang][14],"</h1>\n            <table>\n                <thead>\n                    <tr>\n                        <td class=\"head\">").concat(translations[defaultLang][11],"</td>\n                        <td class=\"head\" colspan=\"2\">").concat(translations[defaultLang][12],"</td>\n                    </tr>\n                </thead>\n                <tbody class=\"user__table\"></tbody>\n            </table>\n        </div>\n    "),nav_topList="\n        <div class=\"admin\" style=\"margin-bottom: 25px;\">\n            <h1>".concat(translations[defaultLang][15],"</h1>\n            <table>\n                <thead>\n                    <tr>\n                        <td class=\"head\" colspan=\"4\">").concat(translations[defaultLang][11],"</td>\n                    </tr>\n                </thead>\n                <tbody class=\"top__table\"></tbody>\n            </table>\n        </div>\n    "),nav_topList_inactive_assign="\n        <td style=\"background-color: #ccc; opacity: 0.5; border-radius: 3px;\" class=\"delete\">\n            <img\n                class=\"action__img\"\n                src=\"./img/assign.png\"\n                alt=\"delete__item\">\n        </td>\n    ",warn_popup="\n        <div class=\"add__placeholder\">\n            <div class=\"add\">\n                <h1>".concat(translations[defaultLang][8],"</h1>\n                <div style=\"display: flex; flex-direction: row; justify-content: center;\">\n                    <button style=\"background-color: #5cd8dc;\"\n                        onclick=\"hideWarn()\">\n                            ").concat(translations[defaultLang][16],"\n                    </button>\n                    <button style=\"background-color: #fba29e;\"\n                        id=\"customOnclick\"\">\n                            ").concat(translations[defaultLang][17],"\n                    </button>\n                </div>\n            </div>\n            <div class=\"error\">\n                <p style=\"color: tomato; width: 400px; max-width: 95vw; font-size: 14px;\">\n                    <code>").concat(translations[defaultLang][18],"</code>\n                </p>\n            </div>\n        </div>\n    "),add_item_popup="\n        <div class=\"add__placeholder\">\n            <div class=\"add\">\n                <h1>".concat(translations[defaultLang][19],"</h1>\n                    <div class=\"omrs-input-group\">\n                        <label class=\"omrs-input-underlined\">\n                        <input\n                            required\n                            class=\"add__input name\"\n                            type=\"text\"\n                            maxlength=\"23\"\n                            oninput=\"errorCleaner()\"\n                        >\n                        <span class=\"omrs-input-label\">").concat(translations[defaultLang][11],"</span>\n                    </div>\n                <div style=\"display: flex; flex-direction: row; justify-content: space-between;\">\n                    <div style=\"margin-left: 3%; width: 47%;\">\n                            <div class=\"omrs-input-group\">\n                                <label class=\"omrs-input-underlined\">\n                                <input\n                                    required\n                                    class=\"add__input qty\"\n                                    maxlength=\"5\"\n                                    id=\"qtyInput\"\n                                    type=\"text\" inputmode=\"numeric\"\n                                    oninput=\"errorCleaner()\"\n                                >\n                                <span class=\"omrs-input-label\">").concat(translations[defaultLang][12],"</span>\n                            </div>\n                    </div>\n                    <select style=\"width: 41%; margin-right: 6%;\"\n                        class=\"add__input unit\"\n                        onchange=\"errorCleaner()\">\n                            <option id=\"0\">").concat(translations[defaultLang][36],"</option>\n                            <option id=\"1\">").concat(translations[defaultLang][37],"</option>\n                            <option id=\"2\">").concat(translations[defaultLang][38],"</option>\n                            <option id=\"3\">").concat(translations[defaultLang][39],"</option>\n                            <option id=\"4\">").concat(translations[defaultLang][40],"</option>\n                    </select>\n                </div>\n                <div style=\"display: flex; flex-direction: row; justify-content: center;\">\n                    <button style=\"background-color: #5cd8dc;\"\n                        onclick=\"confirmAction(true)\">\n                            ").concat(translations[defaultLang][19],"\n                    </button>\n                    <button style=\"background-color: #fba29e;\"\n                        onclick=\"confirmAction(false)\">\n                            ").concat(translations[defaultLang][21],"\n                    </button>\n                </div>\n                <div class=\"error\"></div>\n            </div>\n        </div>\n    "),del_item_popup="\n        <div class=\"add__placeholder\">\n            <div class=\"add\">\n                <h1>".concat(translations[defaultLang][22],"</h1>\n                <div style=\"display: flex; flex-direction: row; justify-content: center;\">\n                    <button style=\"background-color: #fba29e;\"\n                        id=\"delListById\">\n                            ").concat(translations[defaultLang][23],"\n                    </button>\n                    <button style=\"background-color: #5cd8dc;\"\n                        onclick=\"confirmAction(false, 'loadList')\">\n                            ").concat(translations[defaultLang][21],"\n                    </button>\n                </div>\n            </div>\n            <div class=\"error\">\n                <p style=\"color: tomato; width: 400px; max-width: 95vw; font-size: 14px;\">\n                    <code>").concat(translations[defaultLang][24],"</code>\n                </p>\n            </div>\n        </div>\n    "),save_list_popup="\n        <div class=\"add__placeholder\">\n            <div class=\"add\">\n                <h1>".concat(translations[defaultLang][25],"</h1>\n                    <div class=\"omrs-input-group\">\n                        <label class=\"omrs-input-underlined\">\n                        <input\n                            required\n                            class=\"add__input name\n                            type=\"text\"\n                            maxlength=\"25\"\n                            oninput=\"errorCleaner()\"\n                        >\n                        <span class=\"omrs-input-label\">").concat(translations[defaultLang][26],"</span>\n                    </div>\n                <div style=\"display: flex; flex-direction: row; justify-content: center;\">\n                    <button style=\"background-color: #5cd8dc;\"\n                        onclick=\"confirmAction(true, 'list')\">\n                            ").concat(translations[defaultLang][27],"\n                    </button>\n                    <button style=\"background-color: #fba29e;\"\n                        onclick=\"confirmAction(false)\">\n                            ").concat(translations[defaultLang][21],"\n                    </button>\n                </div>\n                <div class=\"error\"></div>\n            </div>\n        </div>\n    "),assign_list_popup="\n        <div class=\"add__placeholder\">\n            <div class=\"add\">\n                <h1>".concat(translations[defaultLang][28],"</h1>\n                    <div class=\"omrs-input-group\">\n                        <label class=\"omrs-input-underlined\">\n                        <input\n                            required\n                            class=\"add__input message\"\n                            type=\"text\"\n                            maxlength=\"75\"\n                            oninput=\"errorCleaner()\"\n                        >\n                        <span class=\"omrs-input-label\">").concat(translations[defaultLang][29],"</span>\n                    </div>\n                <div style=\"display: flex; flex-direction: row; justify-content: center;\">\n                    <button style=\"background-color: #5cd8dc;\"\n                        id=\"assignListById\">\n                            ").concat(translations[defaultLang][20]," \n                    </button>\n                    <button style=\"background-color: #fba29e;\"\n                        onclick=\"confirmAction(false, 'loadList')\">\n                            ").concat(translations[defaultLang][21],"\n                    </button>\n                </div>\n                <div class=\"error\"></div>\n            </div>\n        </div>\n    "),use_list_popup="\n        <div class=\"add__placeholder\">\n            <div class=\"add\">\n                <h1>".concat(translations[defaultLang][30],"</h1>\n                <div style=\"display: flex; flex-direction: row; justify-content: center;\">\n                    <button style=\"background-color: #5cd8dc;\"\n                        id=\"useListById\">\n                            ").concat(translations[defaultLang][31],"\n                    </button>\n                    <button style=\"background-color: #fba29e;\"\n                        id=\"doNotUseListById\">\n                            ").concat(translations[defaultLang][21],"\n                    </button>\n                </div>\n            </div>\n            <div class=\"error\">\n                <p style=\"color: tomato; width: 400px; max-width: 95vw; font-size: 14px;\">\n                    <code>").concat(translations[defaultLang][32],"</code>\n                </p>\n            </div>\n        </div>\n    "),chart_add="\n        <p>".concat(translations[defaultLang][33],"</p>\n        <div class=\"chart\">\n            <canvas id=\"statChart\"></canvas>\n        </div>\n        <button style=\"width: 94%; margin: 3%; background-color: #fba29e;\"\n            onclick=\"logout()\">\n                ").concat(translations[defaultLang][8],"\n        </button>\n    "),exit_button="\n        <button style=\"width: 94%; margin: 3%; background-color: #fba29e;\"\n            onclick=\"logout()\">\n                ".concat(translations[defaultLang][8],"\n        </button>\n    "),empty_table="\n        <td colspan=\"2\">\xAF\\_(\u30C4)_/\xAF</td>\n    ",inbutton_loader="\n        <div>\n            <div style=\"display: flex; justify-content: center;\">\n                <div class=\"dot-loader\"></div>\n            </div>\n        </div>\n    ",cm_spinner="\n        <div style=\"margin: 0 auto;\">\n            <div class=\"cm-spinner\"></div>\n        </div>\n    ",popup_error="\n        <p style=\"color: tomato; position: absolute; width: 400px; max-width: 95vw; font-size: 14;\"\">\n            <code>".concat(translations[defaultLang][34],"<code/>\n        </p>\n    ")}