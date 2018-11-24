import convict from 'convict';

const config = convict({
  iam: {
    role: {
      name: {
        doc: "The name of the role to create",
        default: "lambda-function",
        format: String,
      }
    }
  },
  zip: {
    exclude: {
      doc: "Files or folders that should not be zipped in a function",
      default: ['__tests__', '__mocks__', 'README.md'],
      format: Array,
    }
  }
});

config.load({
  iam: {
    role: {
      name: 'git-lambda'
    }
  }
});

config.validate({allowed: 'strict'});

export default config;
