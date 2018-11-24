# AWS Lamba + github boilerplate 

## TODO
- [ ] think of and create a reasonable cli via npm commands
- [ ] update usage (how-to in readme)
- [ ] update for API gateway integration (separate branch?). API gateway per function.
- [ ] create branch for Slack
- [ ] create branch for Github
- [ ] create branch for Github + Slack
- [ ] dont send the whole node_modules. ensure build step involves a `npm i --only=prod`
- [ ] npm command to test only function and not aux functions
- [ ] move node version into env function and use it in babel.config as well as auxiliary config
- [ ] add cool cli animations (duh)

# Installation

## Install nvm
You'll need [nvm](https://github.com/creationix/nvm)
```bash
nvm use
npm i
```

## Deploying
```bash
npm run deploy
```
