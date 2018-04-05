/*
_   _ _     _       __   __                 _____ _     _ _
| | | (_)   | |      \ \ / /                /  ___| |   (_) |
| |_| |_  __| | ___   \ V /___  _   _ _ __  \ `--.| |__  _| |_
|  _  | |/ _` |/ _ \   \ // _ \| | | | '__|  `--. \ '_ \| | __|
| | | | | (_| |  __/   | | (_) | |_| | |    /\__/ / | | | | |_
\_| |_/_|\__,_|\___|   \_/\___/ \__,_|_|    \____/|_| |_|_|\__|

*/



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
const proxy = require("./proxy.js");
const vpn = require("./vpn.js");
const mac = require("./mac.js");
const tools = require("./tools.js");
var chosenProxy;

function setProxy(proxy1){
  chosenProxy = proxy1;
  console.log("proxy set to : " + proxy1);
  console.log("proxy connected to : " + proxy1);
  proxy.connect(chosenProxy);
  updateALL();
}

function proxyButton(){
 if(!proxy.status()){
   return;
 }else{
   proxy.disconnect();
   updateALL();
   console.log("proxy disconnected from : " + chosenProxy);

 }
}

function updateALL(){
  var x = document.getElementById("proxything");
  if(proxy.status()){
    x.className = "alert alert-success footer";
    x.innerHTML = "Proxy Connected -  ("+chosenProxy+") IP : " + proxy.getCurrent();
    document.getElementById("proxyButton1").innerHTML = "Disconnect";

  }else{
    x.className = "alert alert-danger footer";
    x.innerHTML = "Proxy Diconnected -  IP : " + proxy.getCurrent();
    document.getElementById("proxyButton1").innerHTML = "Click Map To Connect";
  }

  var x = document.getElementById("vpnthing");

  if(vpn.status("HYS-VPN")){
    x.className = "alert alert-success footer";
    x.innerHTML = "VPN Connected -  (HYS-VPN) IP : 54.236.109.175";
    document.getElementById("VPNBUTTON").innerHTML = "Disconnect";

  }else{
    x.className = "alert alert-danger footer";
    x.innerHTML = "VPN Diconnected -  IP : " + tools.ip();
    document.getElementById("VPNBUTTON").innerHTML = "Connect";
  }
  var y = document.getElementById("macthing");
  y.innerHTML = "Current MAC address : " + mac.getMAC();
}
function macButton(){
mac.changeNewMAC();
updateALL()
console.log("Mac Changed");
}
function vpnButton(){
  if(!vpn.status("HYS-VPN")){
    vpn.connect("HYS-VPN");
    console.log("VPN on");
    updateALL();
  }else{
    vpn.disconnect("HYS-VPN");
    console.log("VPN off");
    updateALL();

  }
  updateALL();
}
/*
const ipcRenderer = require('electron').ipcRenderer;
   // wait for an updateReady message
   ipcRenderer.on('updateReady', function(event, text) {
       // changes the text of the button
       var container = document.getElementById('updater');
       container.innerHTML = "new version ready!";
   })*/
