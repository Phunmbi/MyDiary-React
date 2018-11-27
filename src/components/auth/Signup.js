import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return (
      <div>
        <form>
          <input id="email" type="text" placeholder="Email" required />
          <input
            id="password"
            type="password"
            placeholder="Password"
            required
          />
          <input id="submit" type="submit" value="Sign in" />
        </form>
        <p>
          Don't have an account? then
          <a href="signup.html"> Sign up</a>
        </p>
      </div>
    );
  }
}

export default Signup;
