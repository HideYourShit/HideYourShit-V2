/*
_   _ _     _       __   __                 _____ _     _ _
| | | (_)   | |      \ \ / /                /  ___| |   (_) |
| |_| |_  __| | ___   \ V /___  _   _ _ __  \ `--.| |__  _| |_
|  _  | |/ _` |/ _ \   \ // _ \| | | | '__|  `--. \ '_ \| | __|
| | | | | (_| |  __/   | | (_) | |_| | |    /\__/ / | | | | |_
\_| |_/_|\__,_|\___|   \_/\___/ \__,_|_|    \____/|_| |_|_|\__|

*/

const proxy = require("./proxy.js");
const vpn = require("./vpn.js");
const mac = require("./mac.js");
const tools = require("./tools.js");

/*---
particles
---*/

/*---
Tabs
---*/
function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
    var z = document.getElementsByClassName("barbutton");
    var q;
    for (q = 0; q < z.length; q++) {
       z[q].classList.remove("barsel");
       z[q].classList.add("barunsel");
    }
    document.getElementById(tabName +"Button").classList.add("barsel");

}

/*---
Proxy
---*/
var chosenProxy;

function setProxy(proxy1){
  chosenProxy = proxy1;
  console.log("proxy set to : " + proxy1);
}

function updateProx(){
  if(proxy.status()){
      document.getElementById("proxything").classlist.remove("alert-danger");
      document.getElementById("proxything").classlist.add("alert-success");
      document.getElementById("proxything").innerHTML("Proxy Connected ("+chosenProxy+")-  IP : " + proxy.getCurrent());
  }else{
    document.getElementById("proxything").classlist.add("alert-danger");
    document.getElementById("proxything").classlist.remove("alert-success");
    document.getElementById("proxything").innerHTML("Proxy Diconnected -  IP : " + proxy.getCurrent());
  }
}
setInterval(updateProx,3000);

/*
const ipcRenderer = require('electron').ipcRenderer;
   // wait for an updateReady message
   ipcRenderer.on('updateReady', function(event, text) {
       // changes the text of the button
       var container = document.getElementById('updater');
       container.innerHTML = "new version ready!";
   })*/
