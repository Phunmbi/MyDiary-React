import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signin extends Component {
  render() {
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
              <form>
                  <input type="text" placeholder="Email" required />
                  <input type="text" placeholder="Password" required />
                  <button id="submit" type="submit">Sign in</button>
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
