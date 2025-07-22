import React, { useState } from "react";
import imgLogin from "../../assets/img/img-login.png";
import FormLogin from "../molecules/FormLogin";
import RegistrationLink from "../atoms/RegistrationLink";
import { useNavigate } from "react-router-dom";
import "../../styles/pages/loginPage.css";
import { apiAuth } from "../../api/apiAuth";
import { useAuth } from "../../context/authContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schema/auth.schema";
import { useMutation } from "@tanstack/react-query";
import AuthsServices from "@/services/auth.service";

const LoginPage = () => {
  const { setAuthToken } = useAuth();
  const { setAuthIdMitra } = useAuth();
  const [msgErr, setMsgErr] = useState("");

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: AuthsServices.mutationLogin,
    onSuccess: (res) => {
      console.log("res", res);
      setAuthToken(res.data.token);
      if (res.data.user.role !== "USER") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    },
  });

  const handleLogin = async (data) => {
    console.log(data);
    mutate(data);
  };
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100 d-flex justify-content-center align-items-center">
        <div className="col-lg-7 d-none d-lg-flex">
          <img className="w-100" src={imgLogin} alt="img login page" />
        </div>
        <div className="col-md-6 col-lg-5 col-12">
          <div className="shadow-lg px-lg-5 px-4 py-3 py-lg-5 d-flex flex-column justify-content-center align-items-center form-login-container">
            <h2 className="fw-bold login-title">Login</h2>
            {msgErr && (
              <div className="bg-danger-subtle w-100 p-2 my-2">{msgErr}</div>
            )}
            <FormLogin
              handleLogin={handleLogin}
              handleSubmit={handleSubmit}
              register={register}
              errors={errors}
              isLoading={isPending}
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
