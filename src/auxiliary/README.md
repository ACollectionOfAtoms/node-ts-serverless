# Auxiliary AWS Lambda Function Modules

The purpose of these modules is to prepare your function for deployment. These functions should not be
ran within the lambda itself. 

Example:
Add a `setupDynamoDB` module if your lambda requires it.
