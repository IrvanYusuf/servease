import React from "react";
import LabelInput from "../atoms/LabelInput";


function FormRegisterUserInfo (formData,setFormData) {
    return (
        <>
            <div className="mb-3">
                <LabelInput target={"username"} labelText={"Username"} />
                <input
                    className="input-login form-control"
                    type="text"
                    value={formData.username}
                    onChange={(e)=>{
                        setFormData({...formData,username: e.target.value})
                    }}
                />
            </div>
            <div className="mb-3">
                <LabelInput target={"email"} labelText={"Email"} />
                <input
                    className="input-login form-control"
                    type="email"
                    value={formData.email}
                    onChange={(e)=>{
                        setFormData({...formData,email:e.target.value})
                    }}
                />
            </div>
            <div className="mb-3">
                <LabelInput target={"password"} labelText={"Password"} />
                <input
                    className="input-login form-control"
                    type="password"
                    value={formData.password}
                    onChange={(e)=>{
                        setFormData({...formData,password:e.target.value})
                    }}
                />
            </div>
            <div className="mb-5">
                <LabelInput target={"password"} labelText={"Konfirmasi Password"} />
                <input
                    className="input-login form-control"
                    type="password"
                />  
            </div>
            </>
    )
}

export default FormRegisterUserInfo;
