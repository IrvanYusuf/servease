import React, { useState } from "react";
import imgLogin from "../../assets/img/img-login.png";
import FormLogin from "../molecules/FormLogin";
import RegistrationLink from "../atoms/RegistrationLink";
import { useNavigate } from "react-router-dom";
import "../../styles/pages/loginPage.css";
import { apiAuth } from "../../api/apiAuth";
import { useAuth } from "../../context/authContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthToken } = useAuth();
  const { setAuthIdMitra } = useAuth();
  const [msgErr, setMsgErr] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch(`${apiAuth}/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        credentials: true,
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    const data = await response.json();
    if (response.status === 200) {
      setAuthToken(data.token);
      setAuthIdMitra(data.id_mitra);
      if (data.id_role === 2) {
        navigate("/mitra/");
      } else {
        navigate("/");
      }
    } else {
      setMsgErr(data.message);
    }
  };
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 col-lg-7 col-12">
          <img className="w-100" src={imgLogin} alt="img login page" />
        </div>
        <div className="col-md-6 col-lg-5 col-12">
          <div className="shadow-lg px-lg-5 px-4 py-3 py-lg-5 d-flex flex-column justify-content-center align-items-center form-login-container">
            <h2 className="fw-bold login-title">Login</h2>
            {msgErr && (
              <div className="bg-danger-subtle w-100 p-2 my-2">{msgErr}</div>
            )}
            <FormLogin
              email={email}
              password={password}
              handleEmail={handleEmail}
              handlePassword={handlePassword}
              handleLogin={handleLogin}
            />
            <p className="fw-semibold mt-3 text-not-have-account">
              Belum Punya Akun?
              <RegistrationLink
                path={"/register"}
                text={"Daftar"}
                color={"#1B1C4A"}
                fontWeight={"bold"}
                marginStart={"1"}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
