const StatusPembayaran = ({ textStatus }) => {
  const color =
    textStatus.toLowerCase() === "unpadi"
      ? "#EF3D01"
      : textStatus.toLowerCase() === "paid"
      ? "#508D69"
      : "#B31312";

  const backgroundColor =
    textStatus.toLowerCase() === "unpadi"
      ? "rgba(239,61,1,0.2)"
      : textStatus.toLowerCase() === "paid"
      ? "rgba(80, 141, 105, 0.23)"
      : "rgba(179,19,18,0.23";

  return (
    <div
      className="rounded-3 text-center"
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

export default StatusPembayaran;
