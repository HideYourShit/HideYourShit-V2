var menubar = require('menubar')
//const {autoUpdater} = require("electron-updater");

var mb = menubar()
require('electron-debug')({showDevTools: true});

mb.on('ready', function ready () {
  console.log('app is ready');
  //autoUpdater.checkForUpdates();
})
/*autoUpdater.on('update-downloaded', (info) => {
    win.webContents.send('updateReady')
});

// when receiving a quitAndInstall signal, quit and install the new version ;)
ipcMain.on("quitAndInstall", (event, arg) => {
    autoUpdater.quitAndInstall();
})
*/
