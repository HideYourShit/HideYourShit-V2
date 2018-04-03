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

/*----
VPN List
----*/
var regVPN = {

  "HYS-US" : "NORMAL",
  "OOF" : "NORNAL"

};


/*----
Module Exports
----*/

exports.connect = function(vpn){

  shell.exec(`/usr/bin/env osascript <<-EOF
tell application "System Events"
        tell current location of network preferences
                set VPN to service "`+vpn+`" -- your VPN name here
                if exists VPN then connect VPN
        end tell
end tell
EOF`);

}

exports.disconnect = function(vpn){

 shell.exec("scutil --nc stop '" + vpn + "'", {silent:true});

}

exports.status = function(service){

  if (shell.exec("scutil --nc status '" + service + "'", {silent:true}).includes("Disconnected"))
    return false;
  return true;

}

exports.VPNlist = function(){

  return regVPN;

}
