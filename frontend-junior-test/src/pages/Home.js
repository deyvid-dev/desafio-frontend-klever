import React, { Component } from "react";
import { Link } from "react-router-dom";
import shootingstar from '../shooting-star.svg';

class Home extends Component {
  render() {
    return (
      <>
        <img src={ shootingstar } alt="logo" width="30px" />
        <h3>Wish Wallet</h3>
        <Link to="/addtoken">
          <button>Add Token</button>
        </Link>
        <p>Tokens</p>
        <p>Balance</p>
        <Link to="/addtoken"><button>Edit</button></Link><p>KLV</p><p>10,250.50</p>
        <Link to="/addtoken"><button>Edit</button></Link><p>DVK</p><p>50,250.71</p>
        <Link to="/addtoken"><button>Edit</button></Link><p>KFI</p><p>10</p>
      </>
    )
  }
}

export default Home;
