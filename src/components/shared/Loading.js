import React from 'react';
import spinner from '../../assets/Spinner-1s.gif';

export const Loader = () => (
  <div className="no-record centralizer">
    <div><img src={spinner} alt="loader" />&nbsp;&nbsp;
      <span>Loading</span>
    </div>
  </div>
);

const Loading = () => (
  <div className="loading-icon">
    <img src={spinner} alt="" />
  </div>
);

export default Loading;
