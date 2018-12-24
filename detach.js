const { spawn } = require('child_process');

const child = spawn('node', ['timer.js'], {
  detacher: true,
  stdio: 'ignore'
});

child.unref();
