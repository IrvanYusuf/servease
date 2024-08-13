import React from "react";
import LabelInput from "../atoms/LabelInput";

function FormRegisterPersonalInfo({
  formData,
  handleFormData,
  msgEmailSudahTerdaftar,
}) {
  const handleChangeForm = (e) => {
    // const { name, value } = e.target;
    handleFormData(e);
  };
  console.log(formData);

  return (
    <>
      <div className="mb-3">
        <LabelInput target={"nama_depan"} labelText={"Nama"} />
        <input
          className="input-login form-control"
          type="text"
          value={formData.nama}
          name="nama"
          onChange={handleChangeForm}
        />
      </div>
      <div className="mb-3">
        <LabelInput target={"no_telp"} labelText={"No Telp"} />
        <input
          className="input-login form-control"
          type="text"
          value={formData.no_telp}
          name="no_telp"
          onChange={handleChangeForm}
        />
      </div>
      <div className="mb-3">
        <LabelInput labelText={"Jenis Kelamin"} />
        <span className="text-danger"> *</span>
        <select
          className="form-select"
          aria-label="Default select example"
          value={formData.jenis_kelamin}
          onChange={handleChangeForm}
          name="jenis_kelamin"
        >
          <option value="" disabled selected hidden>
            Pilih Jenis Kelamin
          </option>
          <option value="Pria">Pria</option>
          <option value="Wanita">Wanita</option>
        </select>
      </div>
      <div className="mb-3">
        <LabelInput labelText={"Tanggal Lahir"} />
        <span className="text-danger"> *</span>
        <input
          type="date"
          className="form-control"
          name="tanggal_lahir"
          value={formData.tanggal_lahir}
          onChange={handleChangeForm}
          required
        />
      </div>
      <div className="mb-3">
        {msgEmailSudahTerdaftar && (
          <>
            {console.log(msgEmailSudahTerdaftar)}
            {setTimeout(() => {
              <div className="text-danger">{msgEmailSudahTerdaftar}</div>;
            }, 4000)}
          </>
        )}
      </div>
    </>
  );
}

export default FormRegisterPersonalInfo;
