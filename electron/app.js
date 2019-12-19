// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')
const packageJSON = require('../package.json')
const port = packageJSON.development.port
require('./handlers/ipcMonitor') /* 进程消息监听 */
// import './handlers/logs' /* 日志设置 */
const { registerGlobalDevToolsShortCut } = require('./handlers/utils')
// const config = require('./config');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

const isDev = process.env.NODE_ENV === 'development'
const webUrl = isDev
  ? `http://localhost:${port}`
  : `file://${__dirname}/../webroot/index.html`
// const webUrl = `http://localhost:7878`;
const { WINDOW_SIZE } = require('./handlers/config')
const [width, height] = WINDOW_SIZE.LOGIN_SIZE
function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    title: '',
    width,
    height,
    frame: false,
    center: true,
    movable: true,
    useContentSize: true,
    backgroundColor: '#fff',
    transparent: true,
    icon: path.join(__dirname, '../assets/logo.png'),
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      preload: path.join(__dirname, './renderer.js')
    },
    titleBarStyle: 'hidden'
  })

  // and load the index.html of the app.
  mainWindow.loadURL(webUrl)

  // Open the DevTools.
  registerGlobalDevToolsShortCut() // 注册调试快捷键

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
  // 在浏览器中打开新的a标签
  // mainWindow.webContents.on('new-window', function(e, url) {
  //   e.preventDefault()
  //   require('electron').shell.openExternal(url)
  // })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function() {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
// Listen for web contents being createds
