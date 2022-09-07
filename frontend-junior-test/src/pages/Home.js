import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import shootingstar from '../shooting-star.svg';
import '../styles/Home.css'

function Home() {
    const [token, setToken] = useState([]);
    useEffect(() => {
      const items = getLocalStorage('tokenList');
      if (items) {
        setToken(items);
      }
    }, [])

    function getLocalStorage(key) {
      const item = localStorage.getItem(key);
      return JSON.parse(item);
    }
  
    return (
      <label>
          <img src={ shootingstar } alt="logo" width="30px" />
          <h1>Wish Wallet</h1>
           <Link to="/addtoken">
           <button type="button" className="btn btn-danger">Add Token</button>
          </Link>
        <div className="tokens">
          <h3>Tokens</h3>
          <h3>Balance</h3>
        </div>
        { token.map((e) => { return (<div key={e.Token} className="tokens">
          <Link to="/edittoken"><button type="button" className="btn btn-light">Edit</button></Link><p>{ e.Token }</p><p>{ e.Balance }</p>
        </div>)}) }
        
      </label>
    )
  }

export default Home;
