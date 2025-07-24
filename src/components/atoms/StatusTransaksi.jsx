const StatusTransaksi = ({ textStatus, className }) => {
  const status = textStatus.toLowerCase();

  const color =
    status === "pending"
      ? "#6c757d"
      : status === "confirmed"
      ? "#4f50e9"
      : status === "completed"
      ? "#508D69"
      : "#B31312"; // contoh warna ungu untuk cancelled

  const backgroundColor =
    status === "pending"
      ? "rgba(108,117,125,0.2)"
      : status === "confirmed"
      ? "rgba(79, 80, 233, 0.23)"
      : status === "completed"
      ? "rgba(80, 141, 105, 0.23)"
      : "rgba(179,19,18,0.23)";

  return (
    <div
      className={`rounded-3 text-center ${className}`}
      style={{
        backgroundColor,
        color,
        padding: "6px 20px",
        fontSize: "12px",
      }}
    >
      <b>{textStatus}</b>
    </div>
  );
};

export default StatusTransaksi;
