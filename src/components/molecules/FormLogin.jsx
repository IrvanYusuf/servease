import React, { useState } from "react";
import LabelInput from "../atoms/LabelInput";
import ActionButton from "../atoms/ActionButton";
import { useNavigate } from "react-router-dom";
import "../../styles/molecules/formLogin.css";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <form onSubmit={handleLogin} method="post" style={{ width: "100%" }}>
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
