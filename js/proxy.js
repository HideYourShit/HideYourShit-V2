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
Proxy Lists
----*/
  var https = {
    "USA1" : "173.255.143.184 80",
    "USA2" : "75.66.83.12 80",
    "USA3" : "107.170.237.191 80",
    "USA4" : "8.26.61.72 8080",
    "USA5" : "181.215.98.250 8080",
    "USA6" : "8.26.61.71 8080",
    "USA7" : "8.26.61.70 8080",
    "USA8" : "8.26.61.69 8080",
    "USA9" : "209.95.37.66 80",
    "USA10" : "107.180.64.121 8080",

    "UK1" : "88.150.238.134 3128",
    "UK2" : "5.1.83.237 8080",

    "CN1" : "118.144.171.253 3128",
    "CN2" : "110.229.153.254 3128",

    "RU1" : "5.141.252.74 8080",
    "RU2" : "91.221.61.242 3128",

  };
  var sat= {
    "SAT1": "141.105.162.190 8080",
    "SAT2": "81.199.154.115 8080",
    "SAT3": "141.105.161.234 8080",
    "SATsocks4": "212.21.56.255 1080",
    "SAThttp": "141.105.161.238 8080",
  };

/*----
Module Exports
----*/

  exports.connect = function(type, name){

    if(type =="HTTPS")
      shell.exec('networksetup -setwebproxy "Wi-Fi" ' + https[name], {silent:true});
    if(type =="SAT")
      shell.exec('networksetup -setwebproxy "Wi-Fi" ' + sat[name], {silent:true});
    if (this.status())
      return true;
    return false;

  }

  exports.disconnect = function(){

    shell.exec('networksetup -setwebproxystate Wi-Fi off', {silent:true});
    if (this.status())
      return false;
    return true;

  }

  exports.status = function(){

    if (shell.exec('networksetup -getwebproxy Wi-Fi', {silent:true}).includes("Yes"))
      return true;
    return false;

  }

  exports.listproxies = function(type){

    if (type == "HTTPS")
      return https;
    if (type == "SAT")
      return sat;

  }

  exports.testconnect = function(){

    isOnline().then(online => {
      return true;
    });
    return false;


  }

  exports.getCurrent = function(){

    return shell.exec("networksetup -getwebproxy Wi-Fi | awk '/Server:/ {host=$2} /Port: / {port=$2} END { printf \"%s\", host}'", {silent:true}).toString();

  }
