import cp from 'child_process';
import config from './config';

export default function buildForDeploy() {
  const workingDir = './function';
  console.log('building your function...');
  const shellCommands = `
  cp ../package.json .;
  npm --loglevel=error i --only=prod
  cp ../lib/function/* .;
  rm -rf ${config.get("zip.exclude").join(' ')};
  rm package.json;
  rm package-lock.json;
  zip -r function *;
  rm -rf node_modules;
  find . -type f -not -name 'function.zip' -not -name '.gitkeep' -delete;
  `
  cp.execSync(shellCommands, {cwd: workingDir});
  console.log('Function built!');
}

buildForDeploy();
