import cp from 'child_process';

export default function buildForDeploy() {
  const workingDir = './function';
  console.log('building your function...');
  const shellCommands = `
  cp -r ../node_modules .;
  cp ../lib/function/index.js .;
  zip -r function *;
  rm -rf node_modules;
  rm index.js;
  `
  cp.execSync(shellCommands, {cwd: workingDir});
  console.log('Function built!');
}

buildForDeploy();
