import React from 'react';
import Signup from '../auth/Signup';

const LandingPage = (props) => {

  const handleClick = () => {
    console.log(props);
  }

  return (
    <div className="hero">
      <div className="title">
        <h1 onClick={handleClick}>MyDiary</h1>
      </div>

      <section>
        <div className="hero-marketing">
          <p>Let's help you make it easier to keep your diary. </p>
          <p>With the ability to edit and delete entries as you please.</p>
          <p>All wrapped in a lightweight app built for your convenience.</p>
        </div>
          <Signup {...props} />
      </section>
    </div>
  );
};

export default LandingPage;
