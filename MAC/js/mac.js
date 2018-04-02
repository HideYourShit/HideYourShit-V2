/*----
Modules
----*/
var shell = require('shelljs');
const osap = require('osap');
const isOnline = require('is-online');
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

  return (require('node-getmac'));

}

exports.changeMAC = function(newmac){

  

}
