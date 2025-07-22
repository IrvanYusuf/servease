import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import FormRegisterUserInfo from "@/components/organisms/FormRegisterUserInfo";
import FormRegisterPersonalInfo from "@/components/organisms/FormRegisterPersonalInfo";
import ActionButtonOutline from "@/components/atoms/ActionButtonOutline";
import ActionButton from "@/components/atoms/ActionButton";
import { useForm } from "react-hook-form";
import { registerSchema } from "@/schema/auth.schema";
import { useNavigate } from "react-router-dom";
import "@/styles/molecules/formLogin.css";
import { useMutation } from "@tanstack/react-query";
import AuthsServices from "@/services/auth.service";
import { swal } from "@/utils/sweetAlert";

const FormRegister = ({ registerAs = "USER" }) => {
  const [halaman, setHalaman] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const navigate = useNavigate();

  const { mutate, isPending, error } = useMutation({
    mutationFn: AuthsServices.mutationRegister,
    onSuccess: () => {
      navigate("/login");
    },
    onError: (e) => {
      swal({ title: "Error", text: "Email already registered", icon: "error" });
      console.log(e);
    },
  });

  const onSubmit = async (data) => {
    const payload = {
      role: registerAs,
      ...data,
    };
    mutate(payload);
  };

  const nextPage = async () => {
    const valid = await trigger(["username", "email", "password", "cpassword"]);
    if (valid) {
      setHalaman(halaman + 1);
    }
  };
  const prevPage = () => setHalaman(halaman - 1);

  const PageDisplay = () => {
    if (halaman === 0) {
      return <FormRegisterUserInfo register={register} errors={errors} />;
    } else {
      return <FormRegisterPersonalInfo register={register} errors={errors} />;
    }
  };

  console.log("error", error);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="login-container needs-validation"
    >
      {PageDisplay()}

      <div className="row mt-3">
        {halaman === 0 ? (
          <div className="col-12 w-100">
            <ActionButton
              type="button"
              text="Selanjutnya"
              onClick={nextPage}
              className={"w-100"}
            />
          </div>
        ) : (
          <>
            <div className="col-sm-6">
              <ActionButtonOutline
                type="button"
                text="Kembali"
                onClick={prevPage}
              />
            </div>
            <div className="col-sm-6">
              <ActionButton
                text="Register"
                type="submit"
                className="w-100"
                disabled={isPending}
              />
            </div>
          </>
        )}
      </div>
    </form>
  );
};

export default FormRegister;
