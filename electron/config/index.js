const path = require('path');
console.log(process.env.NODE_ENV);
const webUrl =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:7878`
    : `file://${__dirname}/../../webroot/index.html`;

// 配置文件
module.exports = {
  webUrl: webUrl,
  browserWindow: {
    title: '',
    width: 800,
    height: 600,
    frame: true,
    icon: path.join(__dirname, '../assets/logo.png'),
    webPreferences: {
      preload: path.join(__dirname, '../preload.js'),
      nodeIntegration: true
      // webSecurity: false
    }
  }
};
