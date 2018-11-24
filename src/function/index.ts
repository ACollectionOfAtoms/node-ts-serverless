import { Lambda } from 'aws-sdk';
import config from './config';

export const handler = function handler(event: Lambda.Types.InvocationRequest, context, callback) {
  console.log(config.get('testString'));
}

export default handler;
