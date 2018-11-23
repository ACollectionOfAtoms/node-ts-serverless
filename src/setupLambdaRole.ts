import { IAM, AWSError, Request } from 'aws-sdk';

export default function createLambdaIAM(): Request<IAM.Types.CreateRoleResponse, AWSError> {
  const iam: IAM = new IAM({apiVersion: '2010-05-08'});
  const ROLE: IAM.policyNameType = "git-lambda";
  const myPolicy = {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Principal": {
          "Service": "lambda.amazonaws.com"
        },
        "Action": "sts:AssumeRole"
      }
    ]
  };

  const createParams: IAM.Types.CreateRoleRequest = {
  AssumeRolePolicyDocument: JSON.stringify(myPolicy),
  RoleName: ROLE
  };

  const lambdaPolicyParams: IAM.Types.AttachRolePolicyRequest = {
  PolicyArn: "arn:aws:iam::aws:policy/service-role/AWSLambdaRole",
  RoleName: ROLE
  };

  const callback = (err: AWSError, data: IAM.Types.CreateRoleResponse) => {
    if (err) {
      console.log(err, err.stack); // an error occurred
    } else {
      console.log("Role ARN is", data.Role.Arn); // successful response
      iam.attachRolePolicy(lambdaPolicyParams, function(err, data) {
        if (err) {
          console.log(err, err.stack); // an error occurred
        }
      });
      }
  };

  return iam.createRole(createParams, callback);
}
