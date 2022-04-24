import logo from '../images/logo.svg';
import './style.css';

export const Header = () => {
  return (
    <header className="main-content">
      <img src={logo} />
      <div class="topnav">
        <a class="active" href="#home">
          Recent Articles
        </a>
        <a href="#about">About</a>
      </div>
    </header>
  );
};
