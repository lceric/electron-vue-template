var exec = require('child_process').exec
var isRendered = false

function startElectron(compiler, cb) {
  compiler.plugin('done', function() {
    console.log('/-------------run vue-------------/')
    console.log('/-------------run electron-------------/')
    // if (process.env.NODE_ENV === 'production') return;
    if (isRendered) return
    exec('npm run start:electron')
    isRendered = true
    cb && cb instanceof Function && cb()
    console.log('/-------------all of ready-------------/')
  })
}
module.exports = startElectron
