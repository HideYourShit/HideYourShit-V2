/*
_   _ _     _       __   __                 _____ _     _ _
| | | (_)   | |      \ \ / /                /  ___| |   (_) |
| |_| |_  __| | ___   \ V /___  _   _ _ __  \ `--.| |__  _| |_
|  _  | |/ _` |/ _ \   \ // _ \| | | | '__|  `--. \ '_ \| | __|
| | | | | (_| |  __/   | | (_) | |_| | |    /\__/ / | | | | |_
\_| |_/_|\__,_|\___|   \_/\___/ \__,_|_|    \____/|_| |_|_|\__|

*/
/*----
Modules
----*/

var shell = require('shelljs');
const osap = require('osap');
const isOnline = require('is-online');
shell.config.execPath = '/usr/local/bin/node';

/*----
Private Functions
----*/

function genMAC(){
    var hexDigits = "0123456789ABCDEF";
    var macAddress = "";
    for (var i = 0; i < 6; i++) {
        macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
        macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
        if (i != 5) macAddress += ":";
    }

    return macAddress;
}

/*----
Module Functions
----*/

exports.getMAC = function(){

  return shell.exec("/sbin/ifconfig en0 | /usr/bin/awk '/ether / {print $2}'", {silent:true}).toString().trim();

}

exports.changeMAC = function(newmac){
  var string = `do shell script "sudo ifconfig en0 ether `+newmac + `"with administrator privileges `;
  osap(string);
  shell.exec("networksetup -setairportpower en0 off", {silent:true});
  shell.exec("networksetup -setairportpower en0 on", {silent:true});

}

exports.changeNewMAC = function(){
  console.log("Was here!!");
  shell.exec("networksetup -setairportpower en0 off", {silent:true});
  var newmac = genMAC();
  var string = `do shell script "sudo ifconfig en0 ether `+newmac + `"with administrator privileges`;
  osap(string);

  shell.exec("networksetup -setairportpower en0 on", {silent:true});

}
