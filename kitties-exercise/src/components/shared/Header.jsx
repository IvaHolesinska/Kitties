import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import './style.css';

export const Header = () => {
  const [admin, setAdmin] = useState(false);
  return (
    <header className="main-content">
      <img src={logo} />
      <div className="topnav">
        <Link
          to="/"
          className={
            admin === false ? 'topnav-left active' : 'topnav-left grey'
          }
          onClick={() => setAdmin(false)}
        >
          Recent Articles
        </Link>
        <Link
          to="/"
          className="topnav-left grey"
          onClick={() => setAdmin(false)}
        >
          About
        </Link>
        <div className="topnav-right blue">
          {admin === false ? (
            <Link
              to="/uploadFile"
              className="topnav-left blue"
              onClick={() => setAdmin(true)}
            >
              Log in →
            </Link>
          ) : (
            [
              <Link
                to="/uploadFile"
                className="topnav-left"
                onClick={() => setAdmin(true)}
              >
                My Articles
              </Link>,
              <Link
                to="/uploadFile"
                className="topnav-left active"
                onClick={() => setAdmin(true)}
              >
                Create Article
              </Link>,
            ]
          )}
        </div>
      </div>
    </header>
  );
};
