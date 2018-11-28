import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { signup } from '../../actions/authActions';
import validateAuth from '../../lib/validation';
import spinner from '../../assets/Spinner-1s.gif';

class Signup extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',

    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { signup: signupUser } = this.props;

    // Run validation
    const { firstName, lastName, email, password, confirmPassword, errors } = this.state;
    const fieldNames = ['firstname', 'lastname', 'email', 'password', 'confirmPassword'];
    const status = validateAuth({ firstName, lastName, email, password, confirmPassword }, event.target.id, event.target.value, fieldNames);

    // Store validation errors
    this.setState({
      errors: { ...errors, status }
    });

    // Process form fields
    const body = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      password: password.trim()
    };

    // If there are no validation errors
    if (!status.status) {
      // Set loading icon and request
      event.target.children.submit.innerHTML = ''
      event.target.children.submit.style.background = `#FEEF6D url(${spinner}) no-repeat center`;

      // Clear input fields
      event.target.children.firstName.value = '';
      event.target.children.lastName.value = '';
      event.target.children.email.value = '';
      event.target.children.password.value = '';
      event.target.children.confirmPassword.value = '';

      // Send request
      await signupUser(body);
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  componentDidUpdate = () => {
    const { response, history } = this.props;
    if (response.auth.error) {
      const serverError = document.getElementById('errorResponse');
      const submit = document.getElementById('submit');

      // Return and display error
      serverError.innerHTML = response.auth.error.data.Error;

      // Reset styles
      submit.innerHTML = 'Create Account';
      submit.style.background = '#FEEF6D';
    }
    if (response.auth.status === 201) {
      swal('Account Created!', 'Your account was succesfully created!', 'success');
      // Reset styles
      submit.innerHTML = 'Create Account';
      submit.style.background = '#FEEF6D';

       history.push('/dashboard');
    }
  }

  render() {
    const { firstName, lastName, email, password, confirmPassword, errors } = this.state;
    const fieldNames = ['firstName', 'lastName', 'email', 'password', 'confirmPassword'];
    const status = validateAuth({ firstName, lastName, email, password, confirmPassword }, fieldNames);

    return(
      <div className="hero-account">
        <h3>Create your MyDiary Account</h3>
        <p className="errorResponse" id="errorResponse" />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} id="firstName" type="text" placeholder="First Name" required />
          <span className="errorResponse">
            {status.firstname || errors.firstname}
          </span>
          <input onChange={this.handleChange} id="lastName" type="text" placeholder="Last Name" required />
          <span className="errorResponse">
            {status.lastname || errors.lastname}
          </span>
          <input onChange={this.handleChange} id="email" type="email" placeholder="Email" required />
          <span className="errorResponse">
            {status.email || errors.email}
          </span>
          <input onChange={this.handleChange} id="password" type="password" placeholder="Password" required min="8" />
          <span className="errorResponse">
            {status.password || errors.password}
          </span>
          <input onChange={this.handleChange} id="confirmPassword" type="password" placeholder="Confirm Password" required min="8" />
          <span className="errorResponse">
            {status.confirmPassword || errors.confirmPassword}
          </span>
          <button id="submit" type="submit">
            Create Account
          </button>
        </form>
        <p>
          Already have an account? then
          <Link to="/auth/signin"> Sign in</Link>
        </p>
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return { response: state };
}

export default connect(mapStatetoProps, { signup })(Signup);
