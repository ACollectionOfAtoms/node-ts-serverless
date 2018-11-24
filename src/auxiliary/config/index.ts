import schema from './schema';
import convict from 'convict';
const config = convict(schema);
config.load({
  iam: {
    role: {
      name: 'git-lambda'
    }
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
