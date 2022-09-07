import React, { Component } from "react";
import { Link } from "react-router-dom";
import shootingstar from '../shooting-star.svg';
import '../styles/Home.css'

class Home extends Component {
  render() {
    return (
      <label>
          <img src={ shootingstar } alt="logo" width="30px" />
          <h1>Wish Wallet</h1>
           <Link to="/addtoken">
           <button type="button" class="btn btn-danger">Add Token</button>
          </Link>
        <div class="tokens">
          <h3>Tokens</h3>
          <h3>Balance</h3>
        </div>
        <div class="tokens">
          <Link to="/edittoken"><button type="button" class="btn btn-light">Edit</button></Link><p>KLV</p><p>10,250.50</p>
        </div>
        <div class="tokens">
          <Link to="/edittoken"><button type="button" class="btn btn-light">Edit</button></Link><p>DVK</p><p>50,250.71</p>
        </div>
        <div class="tokens">
          <Link to="/edittoken"><button type="button" class="btn btn-light">Edit</button></Link><p>KFI</p><p>10,000.00</p>
        </div>
      </label>
    )
  }
}

export default Home;
