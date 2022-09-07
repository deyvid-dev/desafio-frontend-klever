import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { removeToken } from "../helpers";
import shootingstar from '../shooting-star.svg';

function EditToken() {
  const navigate = useNavigate()
  const { handleSubmit } = useForm();
  const [token, setToken] = useState('');
  function submit(tokenData) {
    navigate("/")
  }
  const handleChange = (e) => {
    const { value } = e.target;
    setToken(value)
  }
    return (
      <>
        <img src={ shootingstar } alt="logo" width="30px" />
        <h3>Wish Wallet</h3>
        <Link to="/">
          <button className="btn btn-secondary">Voltar</button>
        </Link>
        <form onSubmit={handleSubmit(submit)}>
          <h3>Token</h3>
          <input onChange={ handleChange } value={token} required type="text" className="form-control" placeholder="Token"></input>
          <h3>Balance</h3>
          <input required type="number" className="form-control" placeholder="Balance"></input>
          <br></br>
          <div className="buttons">
            <button onClick={ () => {removeToken(token)} } className="btn btn-warning">Remove</button>
          </div>
          <div className="buttons">
            <button type="submit" className="btn btn-success">Save</button>
            </div>
        </form>
      </>
    )
  }

export default EditToken;
