import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../Container/Container';

import './Header.styles.css';

const Header = () => {
  return (
    <Container>
      <header>
        <div className='header-logo'>
          <Link to='/'>
            <img
              src='https://i.ibb.co/T0dj2KJ/home-house-building-main-page-512.png'
              alt='icon'
              height='40'
            />
            <span>&nbsp; Home page</span>
          </Link>
        </div>
        <div className='header-links'>
          <Link to='/home/contacts'>Contact</Link>
          <Link to='/home/details'>Detail</Link>
        </div>
      </header>
    </Container>
  );
};

export default Header;
