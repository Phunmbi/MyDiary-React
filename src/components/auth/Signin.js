import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { signin } from '../../actions/authActions';
import validateAuth from '../../lib/validation';
import spinner from '../../assets/Spinner-1s.gif';

class Signin extends Component {
  state = {
    email: '',
    password: '',
    errors: {
      email: '',
      password: ''
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { signin: signinUser } = this.props;

    // Run validation
    const { email, password, errors } = this.state;
    const fieldNames = ['email', 'password'];
    const status = validateAuth({ email, password }, fieldNames);

    // Store validation errors
    this.setState({
      errors: { ...errors, status }
    });

    // Process form fields
    const body = {
      email: email.trim(),
      password: password.trim()
    };

    // If there are no validation errors
    if (!status.status) {
      // Set loading icon and request
      event.target.children.submit.innerHTML = '';
      event.target.children.submit.style.background = `#FEEF6D url(${spinner}) no-repeat center`;

      // Clear input fields
      event.target.children.email.value = '';
      event.target.children.password.value = '';

      // Send request
      await signinUser(body);
    }
  };

  componentDidUpdate = () => {
    const { response, history } = this.props;
    if (response.auth.error) {
      const serverError = document.getElementById('errorResponse');
      const submit = document.getElementById('submit');

      // Return and display error
      serverError.innerHTML = response.auth.error.data.Error || response.auth.error.data.message;

      // Reset styles
      submit.innerHTML = 'Create Account';
      submit.style.background = '#FEEF6D';
    }
    if (response.auth.status === 200) {
      swal(
        'Welcome back',
        'You have successfully signed into your account',
        'success'
      );
      // Reset styles
      submit.innerHTML = 'Create Account';
      submit.style.background = '#FEEF6D';

      history.push('/dashboard');
    }
  };

  render() {
    const { email, password, errors } = this.state;
    const fieldNames = ['email', 'password'];
    const status = validateAuth({ email, password }, fieldNames);

    return(
      <div className="hero">
        <div className="title">
          <h1>MyDiary</h1>
        </div>
        <section>
          <div className="hero-marketing">
            <p>Let's help you make it easier to keep your diary. </p>
            <p>With daily programmable reminders. </p>
            <p>The ability to edit and delete entries as you please.</p>
            <p>
              All wrapped in a lightweight app built for your convenience.
            </p>
          </div>
          <div className="hero-account">
            <h3>Sign in</h3>
            <p className="errorResponse" id="errorResponse" />
            <form onSubmit={this.handleSubmit}>
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
            <p>
              Don't have an account? then
              <Link to="/"> Sign up</Link>
            </p>
          </div>
        </section>
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return { response: state };
};

export default connect(mapStatetoProps, { signin })(Signin);
