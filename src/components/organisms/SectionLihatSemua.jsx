import React from "react";
import iconRiwayatPemesananNotFound from "../../assets/icon/riwayat-pemesanan-notfound.png";

const SectionLihatSemua = () => {
  return (
    <div className="h-100">
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <img
          src={iconRiwayatPemesananNotFound}
          alt=""
          height={150}
          width={150}
        />
        <h5 className="text-body-tertiary mt-2">
          Kamu belum punya alamat tersimpan
        </h5>
      </div>
    </div>
  );
};

export default SectionLihatSemua;
