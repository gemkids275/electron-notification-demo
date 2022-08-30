const {app, BrowserWindow} = require('electron');

let mainWindow;

// app.setAppUserModelId('com.nyuka.now')

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600, webPreferences: {nodeIntegration: true, contextIsolation: false}});
  mainWindow.webContents.openDevTools();
  mainWindow.loadURL('file://' + __dirname + '/window.html');
});
