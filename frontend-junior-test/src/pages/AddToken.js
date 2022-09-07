import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import shootingstar from "../shooting-star.svg";
import { saveToken } from "../helpers/index";

function AddToken() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submit(tokenData) {
    // console.log(tokenData);
    saveToken(tokenData)
    navigate("/")
  }
  return (
    <>
      <img src={shootingstar} alt="logo" width="30px" />
      <h1>Wish Wallet</h1>
      <Link to="/">
        <button type="button" className="btn btn-secondary">Voltar</button>
      </Link>
      <form onSubmit={handleSubmit(submit)}>
        <h3>Token</h3>
        <input required className="form-control" {...register("Token",)} />
        {errors.Token && <span>Token obrigatório</span>}
        <h3>Balance</h3>
        <input required className="form-control" type="number" {...register("Balance")} />
        {errors.Balance && <span>Balance obrigatório</span>}
        <br></br>

        <button type="submit" className="btn btn-success">Save</button>
        
      </form>
    </>
  );
}

export default AddToken;
