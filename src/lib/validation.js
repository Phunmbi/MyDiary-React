const validateAuth = (fields, fieldName,  fieldValue) => {
  const error = { status: false };

  console.log(fields);
  if (!fieldValue || fieldValue.trim() === '') {
    switch (fieldName) {
      case 'firstName':
        error[fieldName] = 'Please enter your first name.';
        error.status = true;
        break;
      case 'lastName':
        error[fieldName] = 'Please enter your last name.';
        error.status = true;
        break;
      case 'confirmPassword':
        error[fieldName] = 'Please confirm your password.';
        error.status = true;
        break;
      default:
        error[fieldName] = `Please enter a valid ${field}.`;
        error.status = true;
    }
  }


  // checks for valid email
  const emailFormat = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
  if (fields.email) {
    if (!emailFormat.test(fields.email.trim())) {
      error.email = "You've entered an invalid email.";
      error.status = true;
    } else {
      error.email = '';
      error.status = false;
    }
  }

  // checks if passwords match
  const alphaNumberic = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;
  if (fields.password) {
    if (fields.password.length < 5 && !alphaNumberic.test(fields.password.trim())) {
      error.password = 'Your password must be more that 4 characters.';
      error.status = true;
    } else {
      error.password = '';
      error.status = false;
    }
  }

  // checks if passwords match
  if (fields.confirmPassword) {
    if (fields.password !== '' && fields.confirmPassword !== '') {
      if (fields.password !== fields.confirmPassword) {
        error.confirmPassword = 'Passwords do not match.';
        error.status = true;
      }
      else {
        error.confirmPassword = '';
        error.status = false;
      }
    }
  }
  return error;
};

export default validateAuth;
