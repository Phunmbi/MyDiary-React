import React from 'react';
import { Link } from 'react-router-dom';
import ContactIcon from '../../assets/icons8-contacts-26.png';

const Header = () => {
  return (
    <header>
      <Link to="/dashboard">
        <h1>MyDiary</h1>
      </Link>
      <Link to="/profile">
        <img src={ContactIcon} alt="Profile" />
      </Link>
    </header>
  );
};

export default Header;
