import Validation from '../../lib/validation';

const correctFields = {
  email: 'email@gmail.com',
  password: 'passwordpass',
  confirmPassword: 'passwordpass',
};

const wrongFields = {
  email: 'emailcom',
  password: 'password',
  confirmPassword: 'passwordpass',
};

describe('Valication tests', () => {
  it('email validation', () => {
    Validation(correctFields);
    Validation(wrongFields);
  });
});
