import AWS from 'aws-sdk';

import setupLambdaFunction from './setupLambdaFunction';
import setupLambdaRole from './setupLambdaRole';

AWS.config.loadFromPath('./config.json');
