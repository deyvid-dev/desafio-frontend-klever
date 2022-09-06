import React, { Component } from "react";
import { Link } from "react-router-dom";
import shootingstar from '../shooting-star.svg';
import '../styles/Home.css'

class Home extends Component {
  render() {
    return (
      <label>
        <img src={ shootingstar } alt="logo" width="30px" />
        <h3>Wish Wallet</h3>
        <Link to="/addtoken">
          <button>Add Token</button>
        </Link>
        <p>Tokens</p>
        <p>Balance</p>
        <Link to="/edittoken"><button>Edit</button></Link><p>KLV</p><p>10,250.50</p>
        <Link to="/edittoken"><button>Edit</button></Link><p>DVK</p><p>50,250.71</p>
        <Link to="/edittoken"><button>Edit</button></Link><p>KFI</p><p>10</p>
      </label>
    )
  }
}

export default Home;
