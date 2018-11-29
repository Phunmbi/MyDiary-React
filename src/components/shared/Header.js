import React from 'react';
import ContactIcon from '../../assets/icons8-contacts-26.png';

const Header = () => {
  return (
    <header>
      <h1>MyDiary</h1>
      <a href="profile.html">
        <img src={ContactIcon} alt="Profile" />
      </a>
    </header>
  );
};

export default Header;
