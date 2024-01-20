import React from "react";
import CardHistoryBooking from "../molecules/CardHistoryBooking";
const SectionDibatalkan = () => {
  return (
    <div className="h-100">
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <CardHistoryBooking
          backgroundColor={"rgba(179,19,18,0.23"}
          color={"#B31312"}
          textStatus={"Dibatalkan"}
        />
      </div>
    </div>
  );
};

export default SectionDibatalkan;
