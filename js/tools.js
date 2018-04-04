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
const publicIp = require('public-ip');

/*----
Exports
----*/

exports.internet = function(){

  isOnline().then(online => {
    return true;
  });
  return false;


}
exports.ip = function(){

  publicIp.v4().then(ip => {
      return(ip);
  });
  return "untracable";

}
