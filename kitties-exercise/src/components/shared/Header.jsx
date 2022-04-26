import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import './style.css';

export const Header = () => {
  // set user/admin depends on false/true => TODO: make better solution
  const [admin, setAdmin] = useState(false);
  return (
    <header className="main-content">
      <img src={logo} />
      <div className="topnav">
        {/* TODO: figure out better solution than Link to  + connect with new screens*/}
        {/* if admin is false => display "Recent articles" as active */}
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
          {/* display "Log in" for user */}
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
              // display "My Articles" and "Create Article" for admin
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
