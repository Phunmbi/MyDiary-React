import React, { Component } from 'react';
import validateAuth from '../../lib/validation';

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

  handleSubmit = (event) => {
    event.preventDefault();

    // Run validation
    const { firstName, lastName, email, password, confirmPassword } = this.state;
    const fieldNames = ['firstname', 'lastname', 'email', 'password', 'confirmPassword'];
    const status = validateAuth({ firstName, lastName, email, password, confirmPassword }, event.target.id, event.target.value, fieldNames);

    this.setState({
      errors: { ...errors, status }
    });

    const body = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      password: password.trim()
    };

    // Set loading icon and request
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { firstName, lastName, email, password, confirmPassword, errors } = this.state;
    const fieldNames = ['firstName', 'lastName', 'email', 'password', 'confirmPassword'];
    const status = validateAuth({ firstName, lastName, email, password, confirmPassword }, fieldNames);

    return (
      <div className="hero-account">
        <h3>Create your MyDiary Account</h3>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} id="firstName" type="text" placeholder="First Name" required />
                <span className='errorResponse'>{status.firstname || errors.firstname}</span>
                <input onChange={this.handleChange} id="lastName" type="text" placeholder="Last Name" required />
                <span className='errorResponse'>{status.lastname || errors.lastname}</span>
                <input onChange={this.handleChange} id="email" type="email" placeholder="Email" required />
                <span className='errorResponse'>{status.email || errors.email}</span>
                <input onChange={this.handleChange} id="password" type="password" placeholder="Password" required min='8' />
                <span className='errorResponse'>{status.password || errors.password}</span>
                <input onChange={this.handleChange} id="confirmPassword" type="password" placeholder="Confirm Password" required min='8' />
                <span className='errorResponse'>{status.confirmPassword || errors.confirmPassword}</span>
                <input className="loading" id="submit" type="submit" value="Create Account" />
            </form>
            <p>Already have an account? then
                <a href="index.html"> Sign in</a>
            </p>
      </div>
    );
  }
}

export default Signup;
