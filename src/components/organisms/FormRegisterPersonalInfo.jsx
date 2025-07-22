import LabelInput from "@/components/atoms/LabelInput";

function FormRegisterPersonalInfo({ register, errors }) {
  return (
    <>
      <div className="mb-3">
        <LabelInput target={"nama_depan"} labelText={"Nama"} />
        <input
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          type="text"
          {...register("name")}
        />
        {errors.name && (
          <div className="invalid-feedback">{errors.name.message}</div>
        )}
      </div>
      <div className="mb-3">
        <LabelInput target={"no_telp"} labelText={"No Telp"} />
        <input
          className={`form-control ${errors.phone ? "is-invalid" : ""}`}
          type="text"
          {...register("phone")}
        />
        {errors.phone && (
          <div className="invalid-feedback">{errors.phone.message}</div>
        )}
      </div>
      <div className="mb-3">
        <LabelInput labelText={"Jenis Kelamin"} />
        <span className="text-danger"> *</span>
        <select
          className={`form-control ${errors.gender ? "is-invalid" : ""}`}
          aria-label="Default select example"
          name="gender"
          {...register("gender")}
        >
          <option value="" disabled selected hidden>
            Pilih Jenis Kelamin
          </option>
          <option value="MALE">Pria</option>
          <option value="FEMALE">Wanita</option>
        </select>
        {errors.gender && (
          <div className="invalid-feedback">{errors.gender.message}</div>
        )}
      </div>
      <div className="mb-3">
        <LabelInput labelText={"Tanggal Lahir"} />
        <span className="text-danger"> *</span>
        <input
          type="date"
          className={`form-control ${errors.birthDate ? "is-invalid" : ""}`}
          name="birthDate"
          {...register("birthDate")}
        />
        {errors.birthDate && (
          <div className="invalid-feedback">{errors.birthDate.message}</div>
        )}
      </div>
    </>
  );
}

export default FormRegisterPersonalInfo;
