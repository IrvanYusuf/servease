import LabelInput from "@/components/atoms/LabelInput";
import ActionButton from "@/components/atoms/ActionButton";
import "@/styles/molecules/formLogin.css";

const FormLogin = ({
  handleSubmit,
  handleLogin,
  register,
  errors,
  isLoading,
}) => {
  return (
    <form
      className="login-container needs-validation"
      onSubmit={handleSubmit(handleLogin)}
      method="post"
      noValidate
    >
      <div className="mb-3">
        <LabelInput target={"email"} labelText={"Email"} />
        <input
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          type="email"
          placeholder="email@...."
          {...register("email")}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email.message}</div>
        )}
      </div>
      <div className="mb-5">
        <LabelInput target={"password"} labelText={"Password"} />
        <input
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
          type="password"
          placeholder="*****"
          {...register("password")}
        />
        {errors.password && (
          <div className="invalid-feedback">{errors.password.message}</div>
        )}
      </div>
      <ActionButton
        type={"submit"}
        text={"Login"}
        disabled={isLoading}
        className="w-100"
      />
    </form>
  );
};

export default FormLogin;
