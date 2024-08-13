import React, { useState } from "react";
import ActionButton from "../atoms/ActionButton";
import { useNavigate } from "react-router-dom";
import "../../styles/molecules/formLogin.css";
import FormRegisterUserInfo from "../organisms/FormRegisterUserInfo";
import FormRegisterPersonalInfo from "../organisms/FormRegisterPersonalInfo";
import ActionButtonOutline from "../atoms/ActionButtonOutline";
import { apiAuth } from "../../api/apiAuth";
import { swal } from "../../utils/sweetAlert";

const FormRegister = () => {
  //variabel halaman
  const [halaman, setHalaman] = useState(0);
  const [msgErrorPasswordNotSame, setMsgErrorPasswordNotSame] = useState("");
  const [msgErrorEmail, setMsgErrorEmail] = useState("");
  const [msgEmailSudahTerdaftar, setMsgEmailSudahTerdaftar] = useState("");

  // save input
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
    nama: "",
    no_telp: "",
    jenis_kelamin: "",
    tanggal_lahir: "",
    img: null,
    id_role: 1,
  });

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //pagedisplay logic
  const PageDisplay = () => {
    if (halaman === 0) {
      return (
        <FormRegisterUserInfo
          formData={formData}
          handleFormData={handleFormData}
          msgErrorPasswordNotSame={msgErrorPasswordNotSame}
          msgErrorEmail={msgErrorEmail}
          setMsgErrorEmail={setMsgErrorEmail}
        />
      );
    } else {
      return (
        <FormRegisterPersonalInfo
          formData={formData}
          handleFormData={handleFormData}
          msgEmailSudahTerdaftar={msgEmailSudahTerdaftar}
        />
      );
    }
  };

  const navigate = useNavigate();

  const nextPage = () => {
    setHalaman(halaman + 1);
  };

  const prevPage = () => {
    setHalaman(halaman - 1);
  };

  const handleNextForm = () => {
    if (msgErrorEmail !== "" && msgErrorEmail === "email tidak valid") {
      return;
    }
    if (formData.password !== formData.cpassword) {
      setMsgErrorPasswordNotSame("password dan konfirmasi password tidak sama");
    } else {
      setMsgErrorPasswordNotSame("");
      nextPage();
      console.log(formData);
    }
  };

  const handleRegisterForm = async () => {
    const response = await fetch(`${apiAuth}/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);

    if (data.message === "email sudah terdaftar") {
      swal({
        title: "Error",
        text: "Email Sudah Terdaftar",
        icon: "error",
        iconColor: "#EF3D01",
        confirmButtonText: "Tutup",
      });
    } else {
      navigate("/login");
    }
  };
  const ButtonDisplay = () => {
    if (halaman === 0) {
      return (
        <>
          <div className="col-sm-6"></div>
          <div className="w-100">
            <ActionButton
              type={"button"}
              text={"Selanjutnya"}
              onClick={handleNextForm}
            />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="col-sm-6">
            <ActionButtonOutline
              type={"button"}
              text={"Kembali"}
              onClick={prevPage}
            />
          </div>
          <div className="col-sm-6">
            <ActionButton text={"Register"} onClick={handleRegisterForm} />
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div className="container">{PageDisplay()}</div>
      <div className="row" style={{ width: "100%" }}>
        {ButtonDisplay()}
      </div>
    </>
  );
};

export default FormRegister;
