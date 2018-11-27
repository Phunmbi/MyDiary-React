import React from 'react';
import Signup from '../auth/Signup';

const LandingPage = () => {
  return (
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
          <p id="errorResponse" />
          <Signup />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
