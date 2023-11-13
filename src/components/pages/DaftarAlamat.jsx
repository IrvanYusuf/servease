import React from "react";
import ActionButton from "../atoms/ActionButton";
import iconLocationNotFound from "../../assets/icon/location-not-found.png";

const DaftarAlamat = () => {
  return (
    <div className="w-100 h-100 d-flex flex-column">
      <div className="d-flex justify-content-between py-3">
        <h4 style={{ textAlign: "left" }}>Daftar Alamat</h4>
        <div>
          <ActionButton text={"+ Tambah Alamat"} onClick={() => {}} />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <img src={iconLocationNotFound} alt="" height={150} width={150} />
        <h5 className="text-body-tertiary mt-2">
          Kamu belum punya alamat tersimpan
        </h5>
      </div>
    </div>
  );
};

export default DaftarAlamat;
