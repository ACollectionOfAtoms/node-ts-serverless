import schema from './schema';
import convict from 'convict';
const config = convict(schema);
config.load({
  iam: {
    role: {
      name: 'git-lambda',
    },
    arn: 'arn:aws:iam::772920315388:role/git-lambda',
  },
  lambda: {
    functionName: 'git_handler',
    handler: 'index.handler',
    description: 'Lambda + git = <3',
    nodeRuntime: '8.10'
  }
});
config.validate({allowed: 'strict'});
export default config;
