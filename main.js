const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  require('devtron').install()
  let mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })
  mainWindow.loadFile('index.html');
  // let secondWindow = new BrowserWindow({
  //   width: 400,
  //   height: 300,
  //   webPreferences: {
  //     nodeIntegration: true
  //   },
  //   parent: mainWindow
  // })
  // secondWindow.loadFile('second.html')
  mainWindow.webContents.openDevTools();
})