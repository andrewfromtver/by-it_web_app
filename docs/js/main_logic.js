"use strict";/* Itesm processing */function addItem(){blurUi(!0),document.querySelector("body").innerHTML+=add_item_popup,setInputFilter(document.getElementById("qtyInput"),function(a){return /^\d*\,?\d*$/.test(a)})}function delItem(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"item";delItemId=a,"item"==b&&(document.getElementById(a).remove(),itemsList=itemsList.filter(function(b){return b.id!=a}),localStorage.setItem("itemsList",JSON.stringify(itemsList)),admin()),"onlyNotyf"==b&&(userNotifications=userNotifications.filter(function(b){return b.content.id!=a}),localStorage.setItem("userNotifications",JSON.stringify(userNotifications)),main()),"list"==b&&(document.querySelector("body").innerHTML+=del_item_popup,document.querySelector("#delListById").onclick=function(){confirmAction(!0,"delList",a)},blurUi(!0))}function check(a){var b=document.getElementById(a).style;"line-through"==b.textDecoration&&"0.45"==b.opacity?(b.textDecoration="",b.opacity="",selectedRows-=1,selectedItems-=+document.getElementById(a).querySelectorAll("td")[1].innerText):(b.textDecoration="line-through",b.opacity="0.45",selectedRows+=1,selectedItems+=+document.getElementById(a).querySelectorAll("td")[1].innerText),document.querySelector(".content").innerHTML=chart_add;for(var c=document.querySelector(".user__table").rows,d=c.length,e=0,f=0;f<d;f++)e+=+document.querySelector(".user__table").rows[f].querySelectorAll("td")[1].innerText;var g=document.getElementById("statChart").getContext("2d"),h=new Chart(g,{type:"bar",data:{labels:["\u041F\u043E\u0437\u0438\u0446\u0438\u0438"],datasets:[{label:"\u041F\u043B\u0430\u043D",backgroundColor:"#5cd8dc",data:[d,e,0]},{label:"\u0424\u0430\u043A\u0442",backgroundColor:"#fba29e",data:[selectedRows,selectedItems,0]}]},options:{layout:{padding:{left:15,right:25,top:15,bottom:25}}}})}function saveList(){document.querySelector("body").innerHTML+=save_list_popup,blurUi(!0)}function assignList(a){assignListId=a,document.querySelector("body").innerHTML+=assign_list_popup,document.querySelector("#assignListById").onclick=function(){confirmAction(!0,"assignList",a)},blurUi(!0)}function useList(a){useListId-a,document.querySelector("body").innerHTML+=use_list_popup,document.querySelector("#useListById").onclick=function(){confirmAction(!0,"loadList",a)},document.querySelector("#doNotUseListById").onclick=function(){confirmAction(!1,placeSwitch)},blurUi(!0)}function confirmAction(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:null,c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null,d=function(){return"".concat(Math.round(1e8*Math.random()).toString(16))};if(!0==a){if(!b){var e=document.querySelector(".name").value,f=document.querySelector(".qty").value,g=document.querySelector(".unit").value;0<e.length&0<f.length?(itemsList.push({id:d(),name:e,qty:f+" "+g}),document.querySelector(".add__placeholder").remove(),admin(),localStorage.setItem("itemsList",JSON.stringify(itemsList)),blurUi()):document.querySelector(".error").innerHTML=popup_error}if("list"==b){var h=document.querySelector(".name").value;0<h.length?(savedList.push({id:d(),name:h,list:itemsList}),document.querySelector(".add__placeholder").remove(),admin(),localStorage.setItem("savedList",JSON.stringify(savedList)),blurUi()):document.querySelector(".error").innerHTML=popup_error}if("loadList"==b&&(itemsList=savedList.filter(function(a){return a.id==c})[0].list,localStorage.setItem("itemsList",JSON.stringify(itemsList)),document.querySelector(".add__placeholder").remove(),admin(),blurUi()),"delList"==b&&(document.getElementById(c).remove(),savedList=savedList.filter(function(a){return a.id!=c}),userNotifications=userNotifications.filter(function(a){return a.content.id!=c}),localStorage.setItem("savedList",JSON.stringify(savedList)),localStorage.setItem("userNotifications",JSON.stringify(userNotifications)),document.querySelector(".add__placeholder").remove(),toplist(),blurUi()),"assignList"==b){var i=document.querySelector(".message").value||"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442",j="\n                {\"id\": \"".concat(deviceInfo,"\",\n                \"content\": {\"id\": \"").concat(c,"\",\n                \"content\": {\"from\": \"").concat(deviceInfo,"\", \"list\": \"").concat(c,"\", \"message\": \"").concat(i,"\"}}}\n            ");userNotifications.push(JSON.parse(j)),localStorage.setItem("userNotifications",JSON.stringify(userNotifications)),document.querySelector(".add__placeholder").remove(),blurUi(),toplist()}}else document.querySelector(".add__placeholder").remove(),"loadList"==b||"delList"==b?toplist():"assignList"==b?main():admin(),blurUi()}