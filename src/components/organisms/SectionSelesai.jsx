import React from "react";
import CardHistoryBooking from "../molecules/CardHistoryBooking";
const SectionSelesai = () => {
  return (
    <div className="h-100">
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        {Array.from({ length: 5 }, (v, i) => (
          <CardHistoryBooking
            backgroundColor={"rgba(80, 141, 105, 0.23)"}
            color={"#508D69"}
            textStatus={"Selesai"}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionSelesai;
