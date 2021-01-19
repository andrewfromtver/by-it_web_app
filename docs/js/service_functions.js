"use strict";/* Restricts input for the given textbox to the given inputFilter */function setInputFilter(a,b){["input","keydown","keyup","mousedown","mouseup","select","contextmenu","drop"].forEach(function(c){a.addEventListener(c,function(){b(this.value)?(this.oldValue=this.value,this.oldSelectionStart=this.selectionStart,this.oldSelectionEnd=this.selectionEnd):this.hasOwnProperty("oldValue")?(this.value=this.oldValue,this.setSelectionRange(this.oldSelectionStart,this.oldSelectionEnd)):this.value=""})})}/* Window resize on mobile browsers */document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px"),window.addEventListener("resize",function(){setTimeout(function(){var a=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",a+"px")},75)});/* Blur UI on popup */function blurUi(){var a=!!(0<arguments.length&&arguments[0]!==void 0)&&arguments[0];a?(document.querySelector(".navbar").style="filter: blur(8px); opacity: 0.7;",document.querySelector(".container").style="filter: blur(8px); opacity: 0.7;",document.querySelector(".content").style="filter: blur(8px); opacity: 0.7;",document.querySelector(".footer").style="filter: blur(8px); opacity: 0.7;"):(document.querySelector(".navbar").style="",document.querySelector(".container").style="",document.querySelector(".content").style="",document.querySelector(".footer").style="")}/* Preload images & init */function preloadMedia(){document.querySelector(".login__placeholder").innerHTML=cm_spinner,setTimeout(main,3e3)}/* Active navbar item */function activeitem(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"main";"main"==a&&(document.querySelector("#main").style.backgroundColor="#5cd8dc",document.querySelector("#admin").style.backgroundColor="",document.querySelector("#user").style.backgroundColor="",document.querySelector("#top").style.backgroundColor="",document.querySelector("#main").style.boxShadow="0px 0px 10px rgb(92, 216, 220)",document.querySelector("#admin").style.boxShadow="",document.querySelector("#user").style.boxShadow="",document.querySelector("#top").style.boxShadow=""),"admin"==a&&(document.querySelector("#main").style.backgroundColor="",document.querySelector("#admin").style.backgroundColor="#5cd8dc",document.querySelector("#user").style.backgroundColor="",document.querySelector("#top").style.backgroundColor="",document.querySelector("#main").style.boxShadow="",document.querySelector("#admin").style.boxShadow="0px 0px 10px rgb(92, 216, 220)",document.querySelector("#user").style.boxShadow="",document.querySelector("#top").style.boxShadow=""),"user"==a&&(document.querySelector("#main").style.backgroundColor="",document.querySelector("#admin").style.backgroundColor="",document.querySelector("#user").style.backgroundColor="#5cd8dc",document.querySelector("#top").style.backgroundColor="",document.querySelector("#main").style.boxShadow="",document.querySelector("#admin").style.boxShadow="",document.querySelector("#user").style.boxShadow="0px 0px 10px rgb(92, 216, 220)",document.querySelector("#top").style.boxShadow=""),"top"==a&&(document.querySelector("#main").style.backgroundColor="",document.querySelector("#admin").style.backgroundColor="",document.querySelector("#user").style.backgroundColor="",document.querySelector("#top").style.backgroundColor="#5cd8dc",document.querySelector("#main").style.boxShadow="",document.querySelector("#admin").style.boxShadow="",document.querySelector("#user").style.boxShadow="",document.querySelector("#top").style.boxShadow="0px 0px 10px rgb(92, 216, 220)"),activetab=a}/* Warn Popup */function hideWarn(){var a=!!(0<arguments.length&&void 0!==arguments[0])&&arguments[0];if(document.querySelector(".add__placeholder").remove(),blurUi(),a)selectedRows=0,selectedItems=0,window[a]();else{for(var b=document.querySelector(".user__table").rows,c=b.length,d=0,e=0;e<c;e++)d+=+document.querySelector(".user__table").rows[e].querySelectorAll("td")[1].innerText;var f=document.getElementById("statChart").getContext("2d"),g=new Chart(f,{type:"bar",data:{labels:["\u041F\u043E\u0437\u0438\u0446\u0438\u0438"],datasets:[{label:"\u041F\u043B\u0430\u043D",backgroundColor:"#5cd8dc",data:[c,d,0]},{label:"\u0424\u0430\u043A\u0442",backgroundColor:"#fba29e",data:[selectedRows,selectedItems,0]}]},options:{layout:{padding:{left:15,right:25,top:15,bottom:25}}}})}}function warnPopup(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"main";blurUi(!0),document.querySelector("body").innerHTML+=warn_popup,document.querySelector("#customOnclick").onclick=function(){hideWarn(a)}}/* Clear error notification */function errorCleaner(){document.querySelector(".error").innerHTML=""}/* Back button */function initApp(){document.body.innerHTML=init_data,""!=deviceInfo&&preloadMedia()}