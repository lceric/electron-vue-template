var exec = require('child_process').execSync

exec('npm run build:vue', { stdio: 'inherit' })

exec('npm run build:electron', { stdio: 'inherit' })
