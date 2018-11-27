import React from 'react';

const LandingPage = () => {
  return(
    <div className="hero">
      <div className="title">
        <h1>MyDiary</h1>
      </div>

      <section>
        <div className="hero-marketing">
            <p>Let's help you make it easier to keep your diary. </p>
            <p>With the ability to edit and delete entries as you please.</p>
            <p>All wrapped in a lightweight app built for your convenience.</p>
        </div>
        <div className="hero-account">
            <h3>Sign in</h3>
            <p id="errorResponse"></p>
            <form>
                <input id="email" type="text" placeholder="Email" required />
                <input id="password" type="password" placeholder="Password" required />
                <input id="submit" type="submit" value="Sign in" />
            </form>
            <p>Don't have an account? then
                <a href="signup.html">Sign up</a>
            </p>
        </div>
      </section>
    </div>
  )
};

export default LandingPage;
