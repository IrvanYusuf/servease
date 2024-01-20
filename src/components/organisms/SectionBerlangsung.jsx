import React from "react";
import iconRiwayatPemesananNotFound from "../../assets/icon/riwayat-pemesanan-notfound.png";
import CardHistoryBooking from "../molecules/CardHistoryBooking";
const SectionBerlangsung = () => {
  return (
    <div className="h-100">
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <CardHistoryBooking
          backgroundColor={"rgba(79, 80, 233, 0.23)"}
          color={"#4f50e9"}
          textStatus={"Berlangsung"}
        />
      </div>
    </div>
  );
};

export default SectionBerlangsung;
