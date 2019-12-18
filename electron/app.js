// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');
// const path = require('path');
const config = require('./config');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

// const webUrl =
//   process.env.NODE_ENV === 'development'
//     ? `http://localhost:7878`
//     : `file://${__dirname}/../webroot/index.html`;

function createWindow() {
  // Create the browser window.
  let mainWindowConfig = {
    ...config.browserWindow
  };
  console.log(mainWindowConfig);
  mainWindow = new BrowserWindow({
    ...config.browserWindow
  });

  // and load the index.html of the app.
  console.log(config.webUrl);
  mainWindow.loadURL(config.webUrl);
  // if (process.env.NODE_ENV === 'production') {
  // } else {
  //   mainWindow.loadURL(config.webUrl);
  // }
  mainWindow.webContents.openDevTools();

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
  // 在浏览器中打开新的a标签
  // mainWindow.webContents.on('new-window', function(e, url) {
  //   e.preventDefault()
  //   require('electron').shell.openExternal(url)
  // })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function() {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
// Listen for web contents being created
