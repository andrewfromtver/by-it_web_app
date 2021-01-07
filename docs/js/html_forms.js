"use strict";//init
var init_data="\n    <div class=\"login__placeholder\">\n        <div class=\"login\">\n            <h1>\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043A\u0443\u043F\u043E\u043A</h1>\n            <p style=\"font-size: 14px;\">\n                <code>1 - \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0441\u043F\u0438\u0441\u043A\u0438 \u043F\u043E\u043A\u0443\u043F\u043E\u043A<br>\n                <br>\n                2 - \u043E\u0442\u043C\u0435\u0447\u0430\u0439\u0442\u0435 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0432 \u0441\u043F\u0438\u0441\u043A\u0435<br>\n                <br>\n                3 - \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0439\u0442\u0435 \u0438\u0437\u0431\u0440\u0430\u043D\u044B\u0435 \u0441\u043F\u0438\u0441\u043A\u0438<br>\n                <br>\n                4 - \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0439\u0442\u0435 \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F</code>\n            </p>\n            <div style=\"display: flex; flex-direction: row; justify-content: center;\">\n                <button\n                    style=\"background-color: #5cd8dc; width: 80%;\"\n                    onclick=\"login(true)\"\n                >\n                    \u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043F\u043E\u043A\u0443\u043F\u043A\u0430\u043C\n                </button>\n            </div>\n            <div class=\"error\"></div>\n        </div>\n    </div>\n",send_data_warn="\n    <div class=\"add__placeholder\">\n        <div class=\"add\">\n            <h1>\u041F\u043E\u043C\u043E\u0433\u0438\u0442\u0435 \u043D\u0430\u043C \u0441\u0442\u0430\u0442\u044C \u043B\u0443\u0447\u0448\u0435</h1>\n            <p style=\"font-size: 14px;\"><code>\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043C\u043E\u0447\u044C \u043D\u0430\u043C \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043B\u0443\u0447\u0448\u0435, \n            \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0432 \u043D\u0430\u043C \u0441\u0432\u043E\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0435 \u0441\u043F\u0438\u0441\u043A\u0438 \u043F\u043E\u043A\u0443\u043F\u043E\u043A.\n            \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u043D\u0430\u043C \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \n            \u0443\u0434\u043E\u0431\u043D\u0435\u0435 \u0434\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F. \u0412\u0441\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043C\u0430\u044F \u0432\u0430\u043C\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0434\u0435\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\n            \u043C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u0430\u0448\u0438 \u0441\u043F\u0438\u0441\u043A\u0438 \u043F\u043E\u043A\u0443\u043F\u043E\u043A, \u0431\u0435\u0437 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438 \u043A \u0432\u0430\u0448\u0438\u043C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u043C \u0434\u0430\u043D\u043D\u044B\u043C.</code></p>\n            <div style=\"display: flex; flex-direction: row; justify-content: center;\">\n                <button id=\"yes\" style=\"background-color: #5cd8dc;\"\n                    onclick=\"logout('yes')\">\n                        \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C\n                </button>\n                <button id=\"no\" style=\"background-color: #fba29e;\"\n                    onclick=\"logout('no')\">\n                        \u041D\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C\n                </button>\n            </div>\n            <div class=\"error\"></div>\n        </div>\n    </div>\n",nav_main="\n    <div class=\"navbar\">\n        <div class=\"navlinks\">\n            <div class=\"navlink\" id=\"main\" onclick=\"main()\">\n                <img class=\"navlink__img\" width=\"25px\" src=\"./img/home.png\">\n            </div>\n            <div class=\"navlink\" id=\"admin\" onclick=\"admin()\">\n                <img class=\"navlink__img\" width=\"25px\" src=\"./img/list.png\">\n            </div>\n            <div class=\"navlink\" id=\"user\" onclick=\"user()\">\n                <img class=\"navlink__img\" width=\"25px\" src=\"./img/buy.png\">\n            </div>\n            <div class=\"navlink\" id=\"top\" onclick=\"toplist()\">\n                <img class=\"navlink__img\" width=\"25px\" src=\"./img/top.png\">\n            </div>\n        </div>\n    </div>\n    <div class=\"app__data\">\n        <div class=\"container\">\n            <h1>\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043A\u0443\u043F\u043E\u043A</h1>\n            <div class=\"main__img\">\n                <img src=\"./img/logo.png\" alt=\"main\">\n            </div>\n            <p>\u0421\u0435\u0440\u0432\u0438\u0441 \u0434\u043B\u044F \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0441\u043F\u0438\u0441\u043A\u0430 \u043F\u043E\u043A\u0443\u043F\u043E\u043A</p>\n        </div>\n        <div class=\"content\">\n            <button \n                style=\"width: 94%; margin: 3%; background-color: #fba29e;\"\n                onclick=\"logout()\">\n                    \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438\n            </button>\n        </div>\n    </div>\n    <div class=\"footer\">Copyright \xA9 2020 Andranik Sarkisyan</div>\n",nav_main_notifications="\n    <table style=\"margin-top: 20px;\">\n        <thead>\n            <tr>\n                <td class=\"head\" colspan=\"3\">\u041D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F</td>\n            </tr>\n        </thead>\n        <tbody class=\"notification__table\"></tbody>\n    </table>\n    <button\n        style=\"width: 94%; margin: 3%; background-color: #fba29e;\"\n        onclick=\"logout()\">\n            \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438\n    </button>\n",nav_admin="\n    <div class=\"admin\">\n        <h1>\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A</h1>\n        <table>\n            <thead>\n                <tr>\n                    <td class=\"head\">\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435</td>\n                    <td class=\"head\" colspan=\"2\">\u041A\u043E\u043B-\u0432\u043E</td>\n                </tr>\n            </thead>\n            <tbody class=\"admin__table\"></tbody>\n        </table>\n        <div class=\"add__item\">\n            <img onclick=\"addItem()\" src=\"./img/add.png\" alt=\"add__item\">\n        </div>\n    </div>\n",nav_admin_save="\n    <button style=\"width: 94%; margin: 3%; background-color: #5cd8dc;\"\n        onclick=\"saveList()\">\n            \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435\n    </button>\n",nav_user="\n    <div class=\"admin\" style=\"margin-bottom: 25px;\">\n        <h1>\u041A\u0443\u043F\u0438\u0442\u044C \u043F\u043E \u0441\u043F\u0438\u0441\u043A\u0443</h1>\n        <table>\n            <thead>\n                <tr>\n                    <td class=\"head\">\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435</td>\n                    <td class=\"head\" colspan=\"2\">\u041A\u043E\u043B-\u0432\u043E</td>\n                </tr>\n            </thead>\n            <tbody class=\"user__table\"></tbody>\n        </table>\n    </div>\n",nav_topList="\n    <div class=\"admin\" style=\"margin-bottom: 25px;\">\n        <h1>\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0435 \u0441\u043F\u0438\u0441\u043A\u0438</h1>\n        <table>\n            <thead>\n                <tr>\n                    <td class=\"head\" colspan=\"4\">\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435</td>\n                </tr>\n            </thead>\n            <tbody class=\"top__table\"></tbody>\n        </table>\n    </div>\n",nav_topList_inactive_assign="\n    <td style=\"background-color: #ccc; opacity: 0.5; border-radius: 3px;\" class=\"delete\">\n        <img\n            class=\"action__img\"\n            src=\"./img/assign.png\"\n            alt=\"delete__item\">\n    </td>\n",warn_popup="\n    <div class=\"add__placeholder\">\n        <div class=\"add\">\n            <h1>\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0435 \u043F\u043E\u043A\u0443\u043F\u043A\u0438</h1>\n            <div style=\"display: flex; flex-direction: row; justify-content: center;\">\n                <button style=\"background-color: #5cd8dc;\"\n                    onclick=\"hideWarn()\">\n                        \u041E\u0442\u043C\u0435\u043D\u0430\n                </button>\n                <button style=\"background-color: #fba29e;\"\n                    id=\"customOnclick\"\">\n                        \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C\n                </button>\n            </div>\n        </div>\n        <div class=\"error\">\n            <p style=\"color: tomato; width: 400px; max-width: 95vw; font-size: 14px;\">\n                <code>\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0431\u0443\u0434\u0435\u0442 \u0443\u0442\u0435\u0440\u044F\u043D</code>\n            </p>\n        </div>\n    </div>\n",add_item_popup="\n    <div class=\"add__placeholder\">\n        <div class=\"add\">\n            <h1>\u0412 \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043A\u0443\u043F\u043E\u043A</h1>\n                <div class=\"omrs-input-group\">\n                    <label class=\"omrs-input-underlined\">\n                    <input\n                        required\n                        class=\"add__input name\"\n                        type=\"text\"\n                        maxlength=\"23\"\n                        oninput=\"errorCleaner()\"\n                    >\n                    <span class=\"omrs-input-label\">\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435</span>\n                </div>\n            <div style=\"display: flex; flex-direction: row; justify-content: space-between;\">\n                <div style=\"margin-left: 3%; width: 47%;\">\n                        <div class=\"omrs-input-group\">\n                            <label class=\"omrs-input-underlined\">\n                            <input\n                                required\n                                class=\"add__input qty\"\n                                maxlength=\"5\"\n                                id=\"qtyInput\"\n                                type=\"text\" inputmode=\"numeric\"\n                                oninput=\"errorCleaner()\"\n                            >\n                            <span class=\"omrs-input-label\">\u041A\u043E\u043B-\u0432\u043E</span>\n                        </div>\n                </div>\n                <select style=\"width: 41%; margin-right: 6%;\"\n                    class=\"add__input unit\"\n                    placeholder=\"\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\"\n                    onchange=\"errorCleaner()\">\n                        <option id=\"0\">\u0448\u0442</option>\n                        <option id=\"1\">\u043A\u0433</option>\n                        <option id=\"2\">\u0433</option>\n                        <option id=\"3\">\u043B</option>\n                        <option id=\"4\">\u043C\u043B</option>\n                </select>\n            </div>\n            <div style=\"display: flex; flex-direction: row; justify-content: center;\">\n                <button style=\"background-color: #5cd8dc;\"\n                    onclick=\"confirmAction(true)\">\n                        \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\n                </button>\n                <button style=\"background-color: #fba29e;\"\n                    onclick=\"confirmAction(false)\">\n                        \u041E\u0442\u043C\u0435\u043D\u0430\n                </button>\n            </div>\n            <div class=\"error\"></div>\n        </div>\n    </div>\n",del_item_popup="\n    <div class=\"add__placeholder\">\n        <div class=\"add\">\n            <h1>\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A</h1>\n            <div style=\"display: flex; flex-direction: row; justify-content: center;\">\n                <button style=\"background-color: #fba29e;\"\n                    id=\"delListById\">\n                        \u0423\u0434\u0430\u043B\u0438\u0442\u044C\n                </button>\n                <button style=\"background-color: #5cd8dc;\"\n                    onclick=\"confirmAction(false, 'loadList')\">\n                        \u041E\u0442\u043C\u0435\u043D\u0430\n                </button>\n            </div>\n        </div>\n        <div class=\"error\">\n            <p style=\"color: tomato; width: 400px; max-width: 95vw; font-size: 14px;\">\n                <code>\u0421\u043F\u0438\u0441\u043E\u043A \u0442\u0430\u043A\u0436\u0435 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0451\u043D \u0438\u0437 \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0439</code>\n            </p>\n        </div>\n    </div>\n",save_list_popup="\n    <div class=\"add__placeholder\">\n        <div class=\"add\">\n            <h1>\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A</h1>\n                <div class=\"omrs-input-group\">\n                    <label class=\"omrs-input-underlined\">\n                    <input\n                        required\n                        class=\"add__input name\n                        type=\"text\"\n                        maxlength=\"25\"\n                        oninput=\"errorCleaner()\"\n                    >\n                    <span class=\"omrs-input-label\">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435</span>\n                </div>\n            <div style=\"display: flex; flex-direction: row; justify-content: center;\">\n                <button style=\"background-color: #5cd8dc;\"\n                    onclick=\"confirmAction(true, 'list')\">\n                        \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C\n                </button>\n                <button style=\"background-color: #fba29e;\"\n                    onclick=\"confirmAction(false)\">\n                        \u041E\u0442\u043C\u0435\u043D\u0430\n                </button>\n            </div>\n            <div class=\"error\"></div>\n        </div>\n    </div>\n",assign_list_popup="\n    <div class=\"add__placeholder\">\n        <div class=\"add\">\n            <h1>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0435</h1>\n                <div class=\"omrs-input-group\">\n                    <label class=\"omrs-input-underlined\">\n                    <input\n                        required\n                        class=\"add__input message\"\n                        type=\"text\"\n                        maxlength=\"75\"\n                        oninput=\"errorCleaner()\"\n                    >\n                    <span class=\"omrs-input-label\">\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439</span>\n                </div>\n            <div style=\"display: flex; flex-direction: row; justify-content: center;\">\n                <button style=\"background-color: #5cd8dc;\"\n                    id=\"assignListById\">\n                        \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\n                </button>\n                <button style=\"background-color: #fba29e;\"\n                    onclick=\"confirmAction(false, 'loadList')\">\n                        \u041E\u0442\u043C\u0435\u043D\u0430\n                </button>\n            </div>\n            <div class=\"error\"></div>\n        </div>\n    </div>\n",use_list_popup="\n    <div class=\"add__placeholder\">\n        <div class=\"add\">\n            <h1>\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A</h1>\n            <div style=\"display: flex; flex-direction: row; justify-content: center;\">\n                <button style=\"background-color: #5cd8dc;\"\n                    id=\"useListById\">\n                        \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C\n                </button>\n                <button style=\"background-color: #fba29e;\"\n                    id=\"doNotUseListById\">\n                        \u041E\u0442\u043C\u0435\u043D\u0430\n                </button>\n            </div>\n        </div>\n        <div class=\"error\">\n            <p style=\"color: tomato; width: 400px; max-width: 95vw; font-size: 14px;\">\n                <code>\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043A\u0443\u043F\u043E\u043A \u0431\u0443\u0434\u0435\u0442 \u0438\u0437\u043C\u0435\u043D\u0451\u043D</code>\n            </p>\n        </div>\n    </div>\n",chart_add="\n    <p>\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438</p>\n    <div class=\"chart\">\n        <canvas id=\"statChart\"></canvas>\n    </div>\n    <button style=\"width: 94%; margin: 3%; background-color: #fba29e;\"\n        onclick=\"logout()\">\n            \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438\n    </button>\n",exit_button="\n    <button style=\"width: 94%; margin: 3%; background-color: #fba29e;\"\n        onclick=\"logout()\">\n            \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438\n    </button>\n",empty_table="\n    <td colspan=\"2\">\xAF\\_(\u30C4)_/\xAF</td>\n",inbutton_loader="\n    <div>\n        <div style=\"display: flex; justify-content: center;\">\n            <div class=\"dot-loader\"></div>\n        </div>\n    </div>\n",cm_spinner="\n    <div style=\"margin: 0 auto;\">\n        <div class=\"cm-spinner\"></div>\n    </div>\n",popup_error="\n    <p style=\"color: tomato; position: absolute; width: 400px; max-width: 95vw; font-size: 14;\"\">\n        <code>\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F<code/>\n    </p>\n";//autentication