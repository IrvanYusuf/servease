import React, { useState } from "react";
import ActionButton from "../atoms/ActionButton";
import iconLocationNotFound from "../../assets/icon/location-not-found.png";
import ModalFormTambahAlamat from "../molecules/ModalFormTambahAlamat";

const DaftarAlamat = () => {
  const [showModalAlamat, setShowModalAlamat] = useState(false);

  const handleShowModalAlamat = () => {
    setShowModalAlamat(true);
  };
  const handleCloseModalAlamat = () => {
    setShowModalAlamat(false);
  };
  return (
    <div className="w-100 h-100 d-flex flex-column">
      <div className="d-flex justify-content-between py-3">
        <h4 style={{ textAlign: "left" }}>Daftar Alamat</h4>
        <div>
          <ActionButton
            text={"+ Tambah Alamat"}
            onClick={handleShowModalAlamat}
          />
          <ModalFormTambahAlamat
            show={showModalAlamat}
            onHide={handleCloseModalAlamat}
          />
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
