"use strict";var token="1480815536:AAFJO5Tn05vST4Kdt5GQUgqbahHJvsnUqsc",chatId="-1001211332831",userNotifications=[],itemsList=[],savedList=[],deviceInfo="",activetab="",selectedRows=0,selectedItems=0,placeSwitch="assignList",assignListId="",useListId="",delItemId="",defaultLang="russian",translations=[/* 0  */{russian:"\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043A\u0443\u043F\u043E\u043A"},/* 1  */{russian:"<code>1 - \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0441\u043F\u0438\u0441\u043A\u0438 \u043F\u043E\u043A\u0443\u043F\u043E\u043A<br><br>2 - \u043E\u0442\u043C\u0435\u0447\u0430\u0439\u0442\u0435 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0432 \u0441\u043F\u0438\u0441\u043A\u0435<br><br>3 - \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0439\u0442\u0435 \u0438\u0437\u0431\u0440\u0430\u043D\u044B\u0435 \u0441\u043F\u0438\u0441\u043A\u0438<br><br>4 - \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0439\u0442\u0435 \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F</code>"},/* 2  */{russian:"\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043F\u043E\u043A\u0443\u043F\u043A\u0430\u043C"},/* 3  */{russian:"\u041F\u043E\u043C\u043E\u0433\u0438\u0442\u0435 \u043D\u0430\u043C \u0441\u0442\u0430\u0442\u044C \u043B\u0443\u0447\u0448\u0435"},/* 4  */{russian:"\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043C\u043E\u0447\u044C \u043D\u0430\u043C \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043B\u0443\u0447\u0448\u0435, \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0432 \u0441\u0432\u043E\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0435 \u0441\u043F\u0438\u0441\u043A\u0438 \u043F\u043E\u043A\u0443\u043F\u043E\u043A. \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u043D\u0430\u043C \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0443\u0434\u043E\u0431\u043D\u0435\u0435 \u0434\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F. \u0412\u0441\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043C\u0430\u044F \u0432\u0430\u043C\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0434\u0435\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430 \u043C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u0430\u0448\u0438 \u0441\u043F\u0438\u0441\u043A\u0438 \u043F\u043E\u043A\u0443\u043F\u043E\u043A, \u0431\u0435\u0437 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438 \u043A \u0432\u0430\u0448\u0438\u043C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u043C \u0434\u0430\u043D\u043D\u044B\u043C."},/* 5  */{russian:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"},/* 6  */{russian:"\u041D\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C"},/* 7  */{russian:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0434\u043B\u044F \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0441\u043F\u0438\u0441\u043A\u0430 \u043F\u043E\u043A\u0443\u043F\u043E\u043A"},/* 8  */{russian:"\u0417\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438"},/* 9  */{russian:"\u041D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F"},/* 10 */{russian:"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A"},/* 11 */{russian:"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"},/* 12 */{russian:"\u041A\u043E\u043B-\u0432\u043E"},/* 13 */{russian:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"},/* 14 */{russian:"\u041A\u0443\u043F\u0438\u0442\u044C \u043F\u043E \u0441\u043F\u0438\u0441\u043A\u0443"},/* 15 */{russian:"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0435 \u0441\u043F\u0438\u0441\u043A\u0438"},/* 16 */{russian:"\u041E\u0442\u043C\u0435\u043D\u0430"},/* 17 */{russian:"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C"},/* 18 */{russian:"\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0431\u0443\u0434\u0435\u0442 \u0443\u0442\u0435\u0440\u044F\u043D"},/* 19 */{russian:"\u0412 \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043A\u0443\u043F\u043E\u043A"},/* 20 */{russian:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"},/* 21 */{russian:"\u041E\u0442\u043C\u0435\u043D\u0430"},/* 22 */{russian:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A"},/* 23 */{russian:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C"},/* 24 */{russian:"\u0421\u043F\u0438\u0441\u043E\u043A \u0442\u0430\u043A\u0436\u0435 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0451\u043D \u0438\u0437 \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0439"},/* 25 */{russian:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A"},/* 26 */{russian:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"},/* 27 */{russian:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"},/* 28 */{russian:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0435"},/* 29 */{russian:"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"},/* 30 */{russian:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A"},/* 31 */{russian:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C"},/* 32 */{russian:"\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043A\u0443\u043F\u043E\u043A \u0431\u0443\u0434\u0435\u0442 \u0438\u0437\u043C\u0435\u043D\u0451\u043D"},/* 33 */{russian:"\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438"},/* 34 */{russian:"\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F"}];