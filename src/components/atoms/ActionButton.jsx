import "@/styles/atoms/button.css";
const ActionButton = ({
  type,
  text,
  onClick,
  className,
  disabled,
  variant = "orange",
  style,
}) => {
  const variantClass =
    {
      orange: "btn-orange",
      navy: "btn-navy",
      green: "btn-green",
    }[variant] || "btn-orange";
  return (
    <button
      className={`btn-main ${variantClass} ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {text}
    </button>
  );
};

export default ActionButton;
