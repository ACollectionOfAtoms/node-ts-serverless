import { Lambda } from 'aws-sdk';
import config from './config';

export function handler(event: Lambda.Types.InvocationRequest, context, callback) {
  console.log(config.get('testString'));
}
