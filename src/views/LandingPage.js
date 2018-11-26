import React from 'react';

import { Link } from 'react-router-dom';

const LandingPage = () => {
  return(
    <div>
      <h2>My Diary</h2>
      <p><Link to='/auth'>sign up</Link></p>
    </div>
  );
};

export default LandingPage;
