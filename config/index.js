const path = require('path')
// 配置文件
module.exports = {
  webUrl: 'http://st.pf.tumao.com/users/sign_in',
  browserWindow: {
    title: '靠谱',
    width: 800,
    height: 600,
    frame: true,
    icon: path.join(__dirname, '../assets/logo.png'),
    webPreferences: {
      preload: path.join(__dirname, '../preload.js')
    }
  }
}