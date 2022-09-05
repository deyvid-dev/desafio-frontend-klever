import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import shootingstar from "../shooting-star.svg";

function AddToken() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submit(tokenData) {
    console.log(tokenData);
    navigate("/")
  }
  return (
    <>
      <img src={shootingstar} alt="logo" width="30px" />
      <h3>Wish Wallet</h3>
      <Link to="/">
        <button>Voltar</button>
      </Link>
      <form onSubmit={handleSubmit(submit)}>
        <p>Token</p>
        <input {...register("Token", { required: true })} />
        {errors.Token && <span>Token obrigatório</span>}
        <p>Balance</p>
        <input type="number" {...register("Balance", { required: true })} />
        {errors.Balance && <span>Balance obrigatório</span>}
        <br></br>

        <button type="submit">Save</button>
        
      </form>
    </>
  );
}

export default AddToken;
