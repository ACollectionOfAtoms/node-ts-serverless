# AWS Lamba + github boilerplate 

## TODO
- [ ] Create config file using convict and stuff as much as you can in there (ensure VPC config is easy to edit)
- [ ] think of and create a reasonable cli via npm commands
- [ ] update usage (how-to in readme)
- [ ] update for API gateway integration (separate branch?). API gateway per function.
- [ ] create branch for Slack
- [ ] create branch for Github
- [ ] create branch for Github + Slack
- [ ] dont send the whole node_modules. ensure build step involves a `npm i --only=prod`

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
