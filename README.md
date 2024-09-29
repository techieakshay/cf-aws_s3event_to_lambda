# AWS CloudFormation - S3 Event Trigger Lambda

This CloudFormation stack deploys an AWS Lambda function that is triggered whenever a new file is uploaded to an S3 bucket.

## Features
- Automatically triggers the Lambda function on S3 `ObjectCreated` events.
- Lambda function is managed by AWS CloudFormation.
- Permissions to access the S3 bucket and invoke the Lambda function are managed via IAM roles.

## Architecture
The stack consists of:
1. **S3 Bucket**: The source of the file uploads.
2. **Lambda Function**: Processes files uploaded to the S3 bucket.
3. **S3 Bucket Notifications**: Configured to invoke the Lambda when a new file is uploaded.
4. **IAM Role**: Grants necessary permissions for the Lambda to access S3.

## Prerequisites
- AWS CLI configured or access to AWS Management Console.
- Node.js environment for Lambda function (depending on your use case).

## Deployment Instructions

### 1. Prepare the Lambda Code
1. Write your Lambda function and package it as a `.zip` file.
2. Upload the `.zip` file to an S3 bucket for CloudFormation stack creation.

### 2. Create the CloudFormation Stack

#### Using AWS CLI
1. aws cloudformation create-stack --stack-name S3EventToLambdaStack --template-body file://cftemplate.json --capabilities CAPABILITY_NAMED_IAM --profile  my-profile

** You can replace profile with your profile
