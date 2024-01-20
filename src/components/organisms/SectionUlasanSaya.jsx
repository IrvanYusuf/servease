import React from "react";
import iconRiwayatPemesananNotFound from "../../assets/icon/riwayat-pemesanan-notfound.png";
import CardUlasanSaya from "../molecules/CardUlasanSaya";

const SectionUlasanSaya = () => {
  return (
    // <div className="h-100 border">
    <div className="d-flex flex-column align-items-center">
      {Array.from({ length: 10 }, (v, i) => (
        <CardUlasanSaya status={"Selesai"} />
      ))}
    </div>
    // </div>
  );
};

export default SectionUlasanSaya;
