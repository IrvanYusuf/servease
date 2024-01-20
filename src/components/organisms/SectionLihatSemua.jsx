import React from "react";
import iconRiwayatPemesananNotFound from "../../assets/icon/riwayat-pemesanan-notfound.png";
import CardHistoryBooking from "../molecules/CardHistoryBooking";

const SectionLihatSemua = () => {
  return (
    // <div className="h-100 border">
    <div className="d-flex flex-column align-items-center">
      <CardHistoryBooking
        backgroundColor={"rgba(79, 80, 233, 0.23)"}
        color={"#4f50e9"}
        textStatus={"Berlangsung"}
        nilai={1}
      />
      <CardHistoryBooking
        backgroundColor={"rgba(80, 141, 105, 0.23)"}
        color={"#508D69"}
        textStatus={"Selesai"}
        nilai={2}
      />
      <CardHistoryBooking
        backgroundColor={"rgba(179,19,18,0.23"}
        color={"#B31312"}
        textStatus={"Dibatalkan"}
        nilai={3}
      />
      <CardHistoryBooking
        backgroundColor={"rgba(179,19,18,0.23"}
        color={"#B31312"}
        textStatus={"Dibatalkan"}
        nilai={3}
      />
      <CardHistoryBooking
        backgroundColor={"rgba(179,19,18,0.23"}
        color={"#B31312"}
        textStatus={"Dibatalkan"}
        nilai={3}
      />
      <CardHistoryBooking
        backgroundColor={"rgba(179,19,18,0.23"}
        color={"#B31312"}
        textStatus={"Dibatalkan"}
        nilai={3}
      />
    </div>
    // </div>
  );
};

export default SectionLihatSemua;
