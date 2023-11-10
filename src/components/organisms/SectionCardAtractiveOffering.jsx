import React from "react";
import CardAtractiveOffering from "../molecules/CardAtractiveOffering";

const SectionCardAtractiveOffering = () => {
  return (
    <div style={{ marginTop: "69px" }}>
      <h2>Penawaran Menarik</h2>
      <div className="row justify-content-between">
        <CardAtractiveOffering />
        <CardAtractiveOffering />
        <CardAtractiveOffering />
      </div>
    </div>
  );
};

export default SectionCardAtractiveOffering;
