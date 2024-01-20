import React from "react";
import iconRiwayatPemesananNotFound from "../../assets/icon/riwayat-pemesanan-notfound.png";
import CardHistoryBooking from "../molecules/CardHistoryBooking";
import CardBookingMenungguUlasan from "../molecules/CardBookingMenungguUlasan";

const SectionMenungguDiulas = () => {
  return (
    // <div className="h-100 border">
    <div className="d-flex flex-column align-items-center">
      <CardBookingMenungguUlasan
        backgroundColor={"rgba(79, 80, 233, 0.23)"}
        color={"#4f50e9"}
        textStatus={"Berlangsung"}
        nilai={1}
      />
    </div>
    // </div>
  );
};

export default SectionMenungguDiulas;
