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
const tools = require('./tools.js')
/*----
Proxy Lists
----*/
  var proxylist = {
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

    "MEX1" : "200.94.75.212 3128",
    "MEX2" : "187.191.29.210 8000",

    "CA1" : "65.97.222.152 8080",
    "CA2" : "174.92.232.153 8080",

    "BRZ1" : "187.106.104.172 3218",
    "BRZ2" : "187.115.4.145 3218",

    "SA1" : "154.127.60.40 8080",
    "SA2" : "154.127.60.103 8080",

    "IN1" : "203.194.109.142 3218",
    "IN2" : "117.218.50.134 6588",

    "GE1" : "176.9.148.229 3218",
    "GE2" : "176.9.148.253 3218",

    "FR1" : "37.187.101.95 8888",
    "GE2" : "92.222.237.46 8898",

    "SAT": "141.105.161.238 8080"



  };

/*----
Module Exports
----*/

  exports.connect = function(name){

    shell.exec('networksetup -setwebproxy "Wi-Fi" ' + proxylist[name], {silent:true});

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

  exports.proxylist = function(){

      return listproxies;

  }



  exports.getCurrent = function(){

    if(this.status()) {return shell.exec("networksetup -getwebproxy Wi-Fi | awk '/Server:/ {host=$2} /Port: / {port=$2} END { printf \"%s\", host}'", {silent:true}).toString();}
    return tools.ip();
  }
