import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import shootingstar from '../shooting-star.svg';

function EditToken() {
  const navigate = useNavigate()
  const { handleSubmit } = useForm();
  function submit(tokenData) {
    navigate("/")
  }
    return (
      <>
        <img src={ shootingstar } alt="logo" width="30px" />
        <h3>Wish Wallet</h3>
        <Link to="/">
          <button>Voltar</button>
        </Link>
        <form onSubmit={handleSubmit(submit)}>
          <p>Token</p>
          <input required type="text" placeholder="Token"></input>
          <p>Balance</p>
          <input required type="number" placeholder="Balance"></input>
          <br></br>
          <button>Remove</button>

          <button type="submit">Save</button>

        </form>
      </>
    )
  }

export default EditToken;
