import React from "react";
import ImgRegister from "../../assets/img/img-register.png";
import RegistrationLink from "../atoms/RegistrationLink";
import FormRegister from "../molecules/FormRegister";
import "../../styles/molecules/formLogin.css";

const RegisterPage = () => {
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 col-lg-7 col-12">
          <img className="image" src={ImgRegister} alt="img login page" />
        </div>
        <div className="col-md-6 col-lg-5 col-12">
          <div
            className="shadow-sm px-lg-5 px-4 py-3 py-lg-5 d-flex flex-column justify-content-center align-items-center"
            style={{ borderRadius: "20px" }}
          >
            <h2 className="fw-bold" style={{ color: "#1B1C4A" }}>
              Register
            </h2>
            <FormRegister />
            <p className="fw-semibold mt-3" style={{ color: "#949494" }}>
              Belum Punya Akun?
              <RegistrationLink
                path={"/login"}
                text={"Login"}
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

export default RegisterPage;
