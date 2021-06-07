const isDev = process.env.NODE_ENV === 'development'

const apiURL = 'https://cnodejs.org/api/v1'

/**
 * ipcRenderer事件信号
 */
const IPC_RENDERER_SIGNAL = {
  MINIMIZE: 'minimize', // 最小化
  MAXIMIZE: 'maximize', // 最大化
  CLOSE: 'close', // 关闭窗口
  TRANSPARENT: 'transparent', // 办透明
  OPAQUE: 'opaque', // 不透明
  SET_LOGIN_SIZE: 'resize-login', // 设置登录页大小
  SET_MAIN_SIZE: 'resize-medium' // 设置主页大小
}

/**
 * 窗口大小
 */
const WINDOW_SIZE = {
  LOGIN_SIZE: [800, 600],
  MAIN_SIZE: [1300, 868]
}

module.exports = {
  WINDOW_SIZE,
  isDev,
  apiURL,
  IPC_RENDERER_SIGNAL
}
