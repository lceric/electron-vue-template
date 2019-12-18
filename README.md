## electron-vue-tpl
The boilerplate for making electron applications built with vue-cli3 scaffolding and [electron-quick-start](https://github.com/electron/electron-quick-start)

一个`electron`模板，使用了`vue-cli3`脚手架搭建。

<div align="center">
  <br>
    <img width="512" src="/electron/icon/electron-vue-tpl.png" alt="electron-vue-tpl">
    <br>
  <br>
</div>

### Install

```bash
# Clone the repository
git clone https://github.com/lichao-eric/electron-vue-tpl.git

# Go into the repository
cd electron-vue-tpl

# Install dependencies
npm install

# Run the app
npm run dev

# Pack the app, windows-msi, mac-dmg
npm run pack
```

### Develop

#### electron

electron fold：

```bash
|-- electron
  |-- config                              # electron mainwindow configs
  |-- icon
      |-- electron-vue-tpl.png           # app icon, config package.json
  |-- app.js                             # main window
  ...

```

electron目录(暂定为electron的开发目录),electron的[官方文档](https://electronjs.org/docs/tutorial/quick-start)

```bash
|-- electron
  |-- config                              # mainWindow
  |-- icon
      |-- electron-vue-tpl.png           # 应用icon, 可以在package.json中配置
  |-- app.js                             # mainWindow的代码
  ...

```

#### vue

Same as Vue development mode


### Pack Config 打包构建配置

```json
  "build": {
    "productName": "electron-vue-tpl",
    "appId": "com.electron.vue.tpl.app",
    "mac": {
      "target": "dmg",
      "icon": "electron/icon/electron-vue-tpl.png"
    },
    "win": {
      "target": "msi",
      "icon": "electron/icon/electron-vue-tpl.png"
    }
  }
```

`productName`: app name 应用名称

`icon`: app icon 应用icon

more information [electron-builder](https://www.electron.build/configuration/configuration)

更多打包配置项，可以查看[electron-builder文档](https://www.electron.build/configuration/configuration)


### Dependencies 部分依赖

1. `electron`: electron app;

2. `electron-builder`: pack the electron app;

3. `vue`: `vue`, `vue-router`.etc

4. `webpack`: develop and build the vue codes;

...

show `package.json`


<hr>
下面是`electron-quick-start`的README

# electron quick start
**Clone and run for a quick way to see Electron in action.**

This is a minimal Electron application based on the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start) within the Electron documentation.

**Use this app along with the [Electron API Demos](https://electronjs.org/#get-started) app for API code examples to help you get started.**

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.

- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.

- `index.html` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/electron/electron-quick-start

# Go into the repository
cd electron-quick-start

# Install dependencies
npm install

# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
