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
          <button class="btn btn-secondary">Voltar</button>
        </Link>
        <form onSubmit={handleSubmit(submit)}>
          <h3>Token</h3>
          <input required type="text" class="form-control" placeholder="Token"></input>
          <h3>Balance</h3>
          <input required type="number" class="form-control" placeholder="Balance"></input>
          <br></br>
          <div class="buttons">
            <button class="btn btn-warning">Remove</button>
          </div>
          <div class="buttons">
            <button type="submit" class="btn btn-success">Save</button>
            </div>
        </form>
      </>
    )
  }

export default EditToken;
