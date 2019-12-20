## electron-vue-template
The boilerplate for making electron applications built with vue-cli3 scaffolding。

一个`electron`模板，使用了`vue-cli3`脚手架搭建。

<div align="center">
  <br>
    <img width="218" src="/electron/icon/electron-vue-template.png" alt="electron-vue-template">
    <br>
  <br>
</div>

*****
### Install

```bash
# Clone the repository
git clone https://github.com/lichao-eric/electron-vue-template.git

# Go into the repository
cd electron-vue-template

# Install dependencies
npm install

# Run the app
npm run dev

# Pack the app, windows-msi, mac-dmg
npm run pack
```

*****

### Develop

#### electron

electron fold：

```bash
|-- electron
  |-- config                              # electron mainwindow configs
  |-- icon
      |-- electron-vue-template.png           # app icon, config package.json
  |-- app.js                             # main window
  ...

```

electron目录(暂定为electron的开发目录),electron的[官方文档](https://electronjs.org/docs/tutorial/quick-start)

```bash
|-- electron
  |-- config                              # mainWindow
  |-- icon
      |-- electron-vue-template.png           # 应用icon, 可以在package.json中配置
  |-- app.js                             # mainWindow的代码
  ...

```

#### vue

Same as Vue development mode

vue怎么开发，这个就怎么来，如果是electron上，前往[electron文档](https://electronjs.org/docs)

*****

### Pack Config 打包构建配置

```json
  "build": {
    "productName": "electron-vue-template",
    "appId": "com.electron.vue.template.app",
    "mac": {
      "target": "dmg",
      "icon": "electron/icon/electron-vue-template.png"
    },
    "win": {
      "target": "msi",
      "icon": "electron/icon/electron-vue-template.png"
    }
  }
```

`productName`: app name 应用名称

`icon`: app icon 应用icon

more information [electron-builder](https://www.electron.build/configuration/configuration)

更多打包配置项，可以查看[electron-builder文档](https://www.electron.build/configuration/configuration)

*****

## 补充说明

#### 1. 迁移已有的vue项目到该项目，打包后页面一直空白，可能是什么导致的？

可以本地直接打开，如果资源加载不报错，可以看一下路由是不是使用了`history`, 如果是，可以改成`hash`试一下

#### 2. 该工程的流程描述

##### 开发模式

> 主要点就是webpack启动的vue工程与electron的结合

简单来说就是`webpack启动vue工程 -> 在devServer的钩子中启动electron`，热更新代码

##### 构建过程

> electron打入静态页面及资源文件

`webpack打包生成静态资源目录webroot -> electron打包引用webroot目录`，生成dmg/msi安装包

#### 3. 改了`electron/*`目录文件不生效?

暂未支持该目录热更新，可以通过watch该目录，重新启动electron来实现

#### 4. vue工程启动端口设定

在`package.json`中有`development`模块，可以看到`port`，配置一下重启即可。


#### 5. 怎么制定打包后的安装包文件名

现安装包的文件命名规则为： package.json中`productName+versions版本号`

#### 6. 如何配置打包后的文件类型

工程打包使用的是`electron-builder`,默认配置`msi`,`dmg`。

如果需要配置`linux`平台与安装包可以查看[electron-builder文档](https://www.electron.build/configuration/configuration)

*****

### Dependencies 部分依赖

在vue-cli3脚手架基础上，与[electron-quick-start](https://github.com/electron/electron-quick-start)结合构建。

1. `electron`: electron app;

2. `electron-builder`: pack the electron app;

3. `vue`: `vue`, `vue-router`.etc

4. `webpack`: develop and build the vue codes;

...

show `package.json`

<hr>

## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs

*****

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
