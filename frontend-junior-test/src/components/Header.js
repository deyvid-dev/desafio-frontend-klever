import React from "react";
import logo from '../logo.svg';
import '../styles/Header.css';

class Header extends React.Component {
  render() {
    return (
    <label>
      <header className="header">
        <img src={ logo } alt="logo" />
      </header>
    </label>
    )
  }
}

export default Header;
