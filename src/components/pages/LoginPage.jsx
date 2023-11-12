import React, { useState } from "react";
import imgLogin from "../../assets/img/img-login.png";
import FormLogin from "../molecules/FormLogin";
import RegistrationLink from "../atoms/RegistrationLink";
import { useNavigate } from "react-router-dom";
import "../../styles/pages/loginPage.css";

const LoginPage = () => {
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
    if (email === "bambangsarep@gmail.com" && password === "bambang00") {
      localStorage.setItem("id", 1);
      localStorage.setItem("email", "bambangsarep@gmail.com");
      localStorage.setItem("password", "bambang00");
      navigate("/");
    } else {
      alert("Email atau Password salah");
    }
    // "bambangsarep@gmail.com"
    // "bambang00"
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
