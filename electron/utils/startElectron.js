var exec = require('child_process').exec;
var isRendered = false;

function startElectron(compiler, cb) {
  compiler.plugin('done', function() {
    console.log('/************vue项目启动成功***************/');
    console.log('/************启动electron***************/');
    // if (process.env.NODE_ENV === 'production') return;
    if (isRendered) return;
    exec('npm run start:electron', { stdio: 'inherit' });
    isRendered = true;
    cb && cb instanceof Function && cb();
  });
}
module.exports = startElectron;
