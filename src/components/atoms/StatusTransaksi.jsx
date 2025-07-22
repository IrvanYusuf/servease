const StatusTransaksi = ({ textStatus, className }) => {
  const color =
    textStatus.toLowerCase() === "pending"
      ? "#EF3D01"
      : textStatus.toLowerCase() === "confirmed"
      ? "#4f50e9"
      : textStatus.toLowerCase() === "completed"
      ? "#508D69"
      : "#B31312";

  const backgroundColor =
    textStatus.toLowerCase() === "pending"
      ? "rgba(239,61,1,0.2)"
      : textStatus.toLowerCase() === "confirmed"
      ? "rgba(79, 80, 233, 0.23)"
      : textStatus.toLowerCase() === "completed"
      ? "rgba(80, 141, 105, 0.23)"
      : "rgba(179,19,18,0.23";

  return (
    <div
      className={`rounded-3 text-center ${className}`}
      style={{
        backgroundColor,
        color,
        padding: "2px 6px",
        fontSize: "12px",
      }}
    >
      <b>{textStatus}</b>
    </div>
  );
};

export default StatusTransaksi;
