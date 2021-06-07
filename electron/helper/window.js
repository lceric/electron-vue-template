const { BrowserWindow, globalShortcut } = require('electron')

const getCurrentWin = () => BrowserWindow.getFocusedWindow()

const registerGlobalDevToolsShortCut = () => {
  globalShortcut.register('Control+Shift+K', () => {
    let focusWin = BrowserWindow.getFocusedWindow()
    focusWin.toggleDevTools()
  })
}

const closeWindow = () => {
  let focusWin = getCurrentWin()
  focusWin && focusWin.close()
}

const minimizeWindow = () => {
  let focusWin = getCurrentWin()
  focusWin && focusWin.minimize()
}

const maximizeWindow = () => {
  let focusWin = getCurrentWin()
  let isMax = focusWin.isMaximized() // 不能连续执行isMaximized(),不然会carsh
  if (isMax) {
    focusWin && focusWin.unmaximize()
  } else {
    focusWin && focusWin.maximize()
  }
  return !isMax // 同步消息
}

module.exports = {
  getCurrentWin,
  registerGlobalDevToolsShortCut,
  closeWindow,
  minimizeWindow,
  maximizeWindow
}
