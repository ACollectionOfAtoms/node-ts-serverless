import { IAM, createRole, loadFromPath } from '../__mocks__/aws-sdk';
import setupLambdaRole from '../src/setupLambdaRole';
jest.mock('aws-sdk');

describe('setupLambdaRole.ts', () => {
  beforeEach(() => {
    IAM.mockClear();
    loadFromPath.mockClear();
    createRole.mockClear();
  });

  it('calls IAM.createRole', () => {
    setupLambdaRole();
    expect(IAM).toHaveBeenCalledTimes(1);
    expect(IAM().createRole).toHaveBeenCalledTimes(1);
    expect(IAM().attachRolePolicy).toHaveBeenCalledTimes(1);
  });
});
