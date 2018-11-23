import AWS from 'aws-sdk';
AWS.config.loadFromPath('./config.json');

// Create the IAM service object
const lambda = new AWS.Lambda({apiVersion: '2015-03-31'});


const params = {
  Code: { /* required */
    S3Bucket: 'BUCKET_NAME',
    S3Key: 'ZIP_FILE_NAME'
  },
  FunctionName: 'slotpull', /* required */
  Handler: 'slotpull.myHandler', /* required */
  Role: 'ROLE_ARN', /* required */
  Runtime: 'nodejs8.10', /* required */
  Description: 'Slot machine game results generator',
};
lambda.createFunction(params, function(err, data) {
  if (err) console.log(err); // an error occurred
  else     console.log(data);           // successful response
});
