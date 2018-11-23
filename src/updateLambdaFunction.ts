import AWS from 'aws-sdk';
import fs from 'fs';

const creds = new AWS.SharedIniFileCredentials({profile: 'default'});
AWS.config.credentials = creds;
AWS.config.update( { region: 'us-west-2' });
const lambda = new AWS.Lambda({apiVersion: '2015-03-31'});

export default function updateFunc() {
  const functionPath = './function/function.zip';
  if (!fs.existsSync(functionPath)) {
    console.log('No function code to use!');
    return;
  }
  const zippedFunction = fs.readFileSync(functionPath);
  const params: AWS.Lambda.UpdateFunctionCodeRequest = {
    ZipFile: zippedFunction,
    FunctionName: 'git_handler',
  };
  lambda.updateFunctionCode(params, function(err, data) {
    if (err) console.log(err); // an error occurred
    else     console.log(data);// successful response
  });
}
updateFunc();
