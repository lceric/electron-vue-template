const { ipcMain } = require('electron')
const {
  getCurrentWin,
  closeWindow,
  minimizeWindow,
  maximizeWindow
} = require('./utils')
const { IPC_RENDERER_SIGNAL, WINDOW_SIZE } = require('./config')

ipcMain.on(
  IPC_RENDERER_SIGNAL.MAXIMIZE,
  e => (e.returnValue = maximizeWindow())
)
ipcMain.on(IPC_RENDERER_SIGNAL.CLOSE, () => closeWindow())
ipcMain.on(IPC_RENDERER_SIGNAL.MINIMIZE, () => minimizeWindow())
ipcMain.on(IPC_RENDERER_SIGNAL.SET_LOGIN_SIZE, () => {
  let mainWindow = getCurrentWin()
  if (mainWindow) {
    mainWindow.setSize(...WINDOW_SIZE.LOGIN_SIZE)
    mainWindow.center()
  }
})

ipcMain.on(IPC_RENDERER_SIGNAL.SET_MAIN_SIZE, () => {
  let mainWindow = getCurrentWin()
  if (mainWindow) {
    mainWindow.setSize(...WINDOW_SIZE.MAIN_SIZE)
    mainWindow.center()
  }
})

ipcMain.on(IPC_RENDERER_SIGNAL.TRANSPARENT, () => {
  let mainWindow = getCurrentWin()
  mainWindow.setOpacity(0.8)
})

ipcMain.on(IPC_RENDERER_SIGNAL.OPAQUE, () => {
  let mainWindow = getCurrentWin()
  mainWindow.setOpacity(1)
})
