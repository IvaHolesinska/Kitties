import logo from '../images/logo.svg';
import './style.css';

export const Header = () => {
  return (
    <header className="main-content">
      <img src={logo} />
      <div className="topnav">
        <a className="active" href="#home">
          Recent Articles
        </a>
        <a href="#about">About</a>
      </div>
    </header>
  );
};
