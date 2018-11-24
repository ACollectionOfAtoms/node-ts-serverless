export default {
  iam: {
    role: {
      name: {
        doc: "The name of the role to create",
        default: "lambda-function",
        format: String
      }
    },
    arn: {
      doc: "The Amazon Resource Name used when creating your function",
      default: "arn-not-yet-set",
      format: String
    }
  },
  zip: {
    exclude: {
      doc: "Files or folders that should not be zipped in a function",
      default: ['__tests__', '__mocks__', 'README.md'],
      format: Array
    }
  },
  lambda: {
    functionName: {
      doc: 'Name of the lambda function',
      default: 'default-lambda-function-name',
      format: String
    },
    handler: {
      doc: 'The programmatic reference to your functions handler',
      default: 'index.handler',
      format: String
    },
    description: {
      doc: 'The deecription of your lambda function',
      default: 'default lambda description',
      format: String
    },
    nodeRuntime: {
      doc: 'node runtime version to use in the function',
      default: '8.10',
      format: String
    }
  }
}
