import LabelInput from "@/components/atoms/LabelInput";

function FormRegisterUserInfo({ register, errors }) {
  return (
    <>
      <div className="mb-3">
        <LabelInput target={"username"} labelText={"Username"} />
        <input
          className={`form-control ${errors.username ? "is-invalid" : ""}`}
          type="text"
          {...register("username")}
        />
        {errors.username && (
          <div className="invalid-feedback">{errors.username.message}</div>
        )}
      </div>
      <div className="mb-3">
        <LabelInput target={"email"} labelText={"Email"} />
        <input
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          type="email"
          {...register("email")}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email.message}</div>
        )}
      </div>
      <div className="mb-3">
        <LabelInput target={"password"} labelText={"Password"} />
        <input
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
          type="password"
          {...register("password")}
        />
        {errors.password && (
          <div className="invalid-feedback">{errors.password.message}</div>
        )}
      </div>
    </>
  );
}

export default FormRegisterUserInfo;
