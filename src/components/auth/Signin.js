import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import validateAuth from '../../lib/validation';

class Signin extends Component {
  state = {
    email: '',
    password: '',
    errors: {
      email: '',
      password: '',
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { firstName, lastName, email, password, confirmPassword, errors } = this.state;
    const fieldNames = ['firstName', 'lastName', 'email', 'password', 'confirmPassword'];
    const status = validateAuth({ firstName, lastName, email, password, confirmPassword }, fieldNames);

    return (
      <div className="hero">
        <div className="title">
          <h1>MyDiary</h1>
        </div>
        <section>
          <div className="hero-marketing">
              <p>Let's help you make it easier to keep your diary. </p>
              <p>With daily programmable reminders. </p>
              <p>The ability to edit and delete entries as you please.</p>
              <p>All wrapped in a lightweight app built for your convenience.</p>
          </div>
          <div className="hero-account">
              <h3>Sign in</h3>
              <p className="errorResponse" id="errorResponse" />
              <form>
                  <input onChange={this.handleChange} id="email" type="email" placeholder="Email" required />
                  <span className="errorResponse">
                    {status.email || errors.email}
                  </span>
                  <input onChange={this.handleChange} id="password" type="password" placeholder="Password" required min="8" />
                  <span className="errorResponse">
                    {status.password || errors.password}
                  </span>
                  <button id="submit" type="submit">
                    Sign in
                  </button>
              </form>
              <p>Don't have an account? then
                  <Link to="/"> Sign up</Link>
              </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Signin;
