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

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
    const status = validateAuth(this.state, event.target.id, event.target.value);

    if (status.status) {
      this.setState({ errors: status });
    } else {
      this.setState({ errors: status });
    }
  }

  render() {
    const { errors } = this.state
    return (
      <div className="hero-account">
        <h3>Create your MyDiary Account</h3>
            <p id="errorResponse"></p>
            <form>
                <input onChange={this.handleChange} id="firstName" type="text" placeholder="First Name" required />
                <span className='errorResponse'>{errors.firstName}</span>
                <input onChange={this.handleChange} id="lastName" type="text" placeholder="Last Name" required />
                <span className='errorResponse'>{errors.lastName}</span>
                <input onChange={this.handleChange} id="email" type="email" placeholder="Email" required />
                <span className='errorResponse'>{errors.email}</span>
                <input onChange={this.handleChange} id="password" type="password" placeholder="Password" required min='8' />
                <span className='errorResponse'>{errors.password}</span>
                <input onChange={this.handleChange} id="confirmPassword" type="password" placeholder="Confirm Password" required min='8' />
                <span className='errorResponse'>{errors.confirmPassword}</span>
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
