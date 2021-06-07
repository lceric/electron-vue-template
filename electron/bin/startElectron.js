var { spawn } = require('child_process')

var isWinPlatform = /^win/.test(process.platform)
var npmCmd = isWinPlatform ? 'npm.cmd' : 'npm'
var isRendered = false

function startElectron(compiler, cb) {
  compiler.plugin('done', function() {
    console.log('/-------------run vue-------------/')
    console.log('/-------------run electron-------------/')
    // if (process.env.NODE_ENV === 'production') return;
    if (isRendered) return
    var ls = spawn(npmCmd, ['run', 'start:electron'], { stdio: 'inherit' })
    isRendered = true
    cb && cb instanceof Function && cb()
    console.log('/-------------all of ready-------------/')
    ls.stdout.on('data', data => {
      console.log(`stdout: ${data}`)
    })
  })
}
module.exports = startElectron
