import React, { useState } from "react";
import LabelInput from "../atoms/LabelInput";

function FormRegisterUserInfo({
  formData,
  handleFormData,
  msgErrorPasswordNotSame,
  setMsgErrorEmail,
  msgErrorEmail,
}) {
  const [isvalid, setIsValid] = useState(false);

  // console.log(handleFormData);
  const handleChangeForm = (e) => {
    // const { name, value } = e.target;
    handleFormData(e);

    if (e.target.name === "email" && e.target.value !== "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(e.target.value);
      if (!isValidEmail) {
        setMsgErrorEmail("email tidak valid");
      } else {
        setMsgErrorEmail("");
      }
    }
  };
  return (
    <>
      <div className="mb-3">
        <LabelInput target={"username"} labelText={"Username"} />
        <input
          className="input-login form-control"
          type="text"
          value={formData.username}
          name="username"
          onChange={handleChangeForm}
        />
      </div>
      <div className="mb-3">
        <LabelInput target={"email"} labelText={"Email"} />
        <input
          className="input-login form-control"
          type="email"
          value={formData.email}
          name="email"
          onChange={handleChangeForm}
          required
        />
        <div className="text-danger">
          {msgErrorEmail === "" ? "" : "email tidak valid"}
        </div>
      </div>
      <div className="mb-3">
        <LabelInput target={"password"} labelText={"Password"} />
        <input
          className="input-login form-control"
          type="password"
          value={formData.password}
          name="password"
          onChange={handleChangeForm}
        />
      </div>
      <div className="mb-5">
        <LabelInput target={"password"} labelText={"Konfirmasi Password"} />
        <input
          className="input-login form-control"
          type="password"
          name="cpassword"
          value={formData.cpassword}
          onChange={handleChangeForm}
        />
        <div className="text-danger">
          {msgErrorPasswordNotSame && msgErrorPasswordNotSame}
        </div>
      </div>
    </>
  );
}

export default FormRegisterUserInfo;
