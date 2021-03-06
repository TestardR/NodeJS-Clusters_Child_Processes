const { spawn } = require('child_process');

// const child = spawn('pwd');
// const child = spawn('find', ['honeuoes', '-type', 'f']);

// child.stdout.on('data', data => {
//   console.log(`child stdout:\n${data}`);
// });

// child.stderr.on('data', data => {
//   console.error(`child stderr:\n${data}`);
// });

// child.on('exit', function(code, signal) {
//   console.log(`child process exited with code ${code}, signal ${signal}`);
// });

// other events on child: disconnect, error, message, close
// stdio objects: child.stdin, child.stdout, child.stderr

// Shell mode
// const child = spawn('find . -type f', {
//   stdio: 'inherit',
//   shell: true
// });

const child = spawn('find . -type f | wc -l', {
  stdio: 'inherit',
  shell: true,
  cwd: '/Users/Romain/Downloads'
});
