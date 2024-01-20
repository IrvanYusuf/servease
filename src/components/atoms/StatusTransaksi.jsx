import React from "react";

const StatusTransaksi = ({ backgroundColor, color, textStatus }) => {
  return (
    <div
      className="rounded-3 text-center"
      style={{
        backgroundColor: backgroundColor,
        color: color,
        padding: "2px 6px",
        fontSize: "12px",
      }}
    >
      <b>{textStatus}</b>
    </div>
  );
};

export default StatusTransaksi;
