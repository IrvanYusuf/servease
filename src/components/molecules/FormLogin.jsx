import React from "react";
import LabelInput from "../atoms/LabelInput";
import ActionButton from "../atoms/ActionButton";
// import { useNavigate } from "react-router-dom";
import "../../styles/molecules/formLogin.css";

const FormLogin = ({
  handleLogin,
  email,
  password,
  handleEmail,
  handlePassword,
}) => {
  return (
    <form className="login-container" onSubmit={handleLogin} method="post">
      <div className="mb-3">
        <LabelInput target={"email"} labelText={"Email"} />
        <input
          className="input-login form-control"
          type="email"
          placeholder="email@...."
          value={email}
          onChange={handleEmail}
        />
      </div>
      <div className="mb-5">
        <LabelInput target={"password"} labelText={"Password"} />
        <input
          className="input-login form-control"
          type="password"
          placeholder="*****"
          value={password}
          onChange={handlePassword}
        />
      </div>
      <ActionButton type={"submit"} text={"Login"} />
    </form>
  );
};

export default FormLogin;
