import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg';

class Header extends React.Component {
  render() {
    return (
    <>
      <header className="header">
        <p>Header</p>
        <img src={ logo } alt="logo" />
        {/* <Link to="/addtoken">AddToken</Link> */}
      </header>
    </>
    )
  }
}

export default Header;
