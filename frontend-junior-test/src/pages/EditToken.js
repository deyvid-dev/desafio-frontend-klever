import React, { Component } from "react";
import { Link } from "react-router-dom";
import shootingstar from '../shooting-star.svg';

class EditToken extends Component {
  render() {
    return (
      <>
        <img src={ shootingstar } alt="logo" width="30px" />
        <h3>Wish Wallet</h3>
        <Link to="/">
          <button>Voltar</button>
        </Link>
        <p>Token</p>
        <input></input>
        <p>Balance</p>
        <input></input>
        <br></br>
        <button>Remove</button>
        <Link to="/">
        <button>Save</button>
        </Link>
      </>
    )
  }
}

export default EditToken;
