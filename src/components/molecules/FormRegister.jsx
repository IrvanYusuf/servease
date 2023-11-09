import React, { useState } from "react";
import ActionButton from "../atoms/ActionButton";
import { useNavigate } from "react-router-dom";
import "../../styles/molecules/formLogin.css";
import FormRegisterUserInfo from "../organisms/FormRegisterUserInfo";
import FormRegisterPersonalInfo from "../organisms/FormRegisterPersonalInfo";
import ActionButtonOutline from "../atoms/ActionButtonOutline"
import { useEffect } from "react";


const FormRegister = () => {
  //variabel halaman
  const [halaman, setHalaman] = useState(0);

  useEffect(() =>{
    
  })

  console.log(halaman)

  // save input
  const [formData, setFormData]= useState({
    username : "",
    email : "",
    password : "",
    nama_depan : "",
    no_telp : "",
    alamat :""

  })

  //pagedisplay logic
  const PageDisplay = () =>{
    if (halaman === 0){
      return <FormRegisterUserInfo formData={formData} setFormData={setFormData}/>
    }else{
      return <FormRegisterPersonalInfo formData={formData} setFormData={setFormData}/>
    }
  }

  
  const navigate = useNavigate();


  const nextPage = () =>{
    setHalaman(halaman+1)
  }

  const prevPage = () =>{
    setHalaman(halaman-1)
  }


  const ButtonDisplay = () => {
    if (halaman === 0 ){
      return (
        <>
        <div className="col-sm-6">
         
        </div>
        <div className="col-sm-6">
          <ActionButton  type={"button"} text={"Selanjutnya"} onClick={() => setHalaman(1)} />
        </div>
        </>
      )
    }else{
      return (
        <>
        <div className="col-sm-6">
        <ActionButtonOutline type={"button"} text={"Kembali"}/>
        </div>
        <div className="col-sm-6">
          <ActionButton text={"Register"} />
        </div>
        </>
        
      )
    }
  }

  
  return (
    <>
    <div className="container">
       {PageDisplay()}
      </div>
      <div className="row" style={{ width: "100%" }}>
        {ButtonDisplay()}
      </div>
      </>
      
    
    
  );
};

export default FormRegister;
