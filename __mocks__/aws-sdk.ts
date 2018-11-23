export const loadFromPath = jest.fn();
export const createRole = jest.fn();
export const attachRolePolicy = jest.fn();
export const IAM = jest.fn().mockImplementation(() => {
  return {
    createRole,
    attachRolePolicy,
  }
});

export default {
  config: {
    loadFromPath,
  },
  IAM, 
}
