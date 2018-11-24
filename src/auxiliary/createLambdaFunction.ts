import AWS from 'aws-sdk';
import fs from 'fs';
import config from './config';

const creds = new AWS.SharedIniFileCredentials({profile: 'default'});
AWS.config.credentials = creds;
AWS.config.update( { region: 'us-west-2' });

const lambda = new AWS.Lambda({apiVersion: '2015-03-31'});

export default function createLambdaFunction() {
  const functionPath = './function/function.zip';
  if (!fs.existsSync(functionPath)) {
    console.log('No function code to use!');
    return;
  }
  const zippedFunction = fs.readFileSync(functionPath);
  const params = {
    Code: { /* required */
      ZipFile: zippedFunction,
    },
    FunctionName: config.get('lambda.funcionName'), /* required */
    Handler: config.get('lambda.handler'), /* required */
    // TODO: get Arn from setupLambdaRole output
    Role: 'arn:aws:iam::772920315388:role/git-lambda', /* required */
    Runtime: `nodejs${config.get('lambda.nodeRuntime')}`, /* required */
    Description: config.get('lambda.description'),
  };
  lambda.createFunction(params, function(err, data) {
    if (err) console.log(err); // an error occurred
    else     console.log(data);// successful response
  });
}
if (!module.parent) { 
  createLambdaFunction();
}
