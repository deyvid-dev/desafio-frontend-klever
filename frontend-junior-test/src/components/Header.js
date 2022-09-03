import React from "react";
import logo from '../logo.svg';

class Header extends React.Component {
  render() {
    return (
    <>
      <header className="header">
        <p>Header</p>
        <img src={ logo } alt="logo" />
      </header>
    </>
    )
  }
}

export default Header;
