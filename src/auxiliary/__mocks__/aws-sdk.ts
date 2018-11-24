export const loadFromPath = jest.fn();
export const createRole = jest.fn((params, callback: Function) => {
  callback(null, { Role: { Arn: 'test-arn'}});
});
export const attachRolePolicy = jest.fn();
export const IAM = jest.fn().mockImplementation(() => {
  return {
    createRole,
    attachRolePolicy,
  }
});

export const SharedIniFileCredentials = jest.fn().mockImplementation(()=> {
  return {};
})

export default {
  SharedIniFileCredentials,
  config: {
    loadFromPath,
  },
  IAM, 
}
