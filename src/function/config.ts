import convict from 'convict';

const config = convict({
  testString: {
    doc: "An example of a config value",
    format: String,
    default: "test"
  }
});

config.load({
  testString: "my-string"
});

config.validate({allowed: 'strict'});

export default config;
