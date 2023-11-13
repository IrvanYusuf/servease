import React from "react";
import LabelInput from "../atoms/LabelInput";

function FormRegisterPersonalInfo(formData, setFormData) {
  return (
    <>
      <div className="mb-3">
        <LabelInput target={"nama_depan"} labelText={"Nama Depan"} />
        <input
          className="input-login form-control"
          type="text"
          value={formData.nama_depan}
          onChange={(e) => {
            setFormData({ ...formData, nama_depan: e.target.value });
          }}
        />
      </div>
      <div className="mb-3">
        <LabelInput target={"no_telp"} labelText={"No Telp"} />
        <input
          className="input-login form-control"
          type="text"
          value={formData.no_telp}
          onChange={(e) => {
            setFormData({ ...formData, no_telp: e.target.value });
          }}
        />
      </div>
      <div className="mb-5">
        <LabelInput target={"alamat"} labelText={"Alamat"} />
        <input
          className="input-login form-control"
          type="text"
          value={formData.alamat}
          onChange={(e) => {
            setFormData({ ...formData, alamat: e.target.value });
          }}
        />
      </div>
    </>
  );
}

export default FormRegisterPersonalInfo;
