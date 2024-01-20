import Swal from "sweetalert2";

export const swal = ({
  title,
  text,
  icon,
  iconColor,
  confirmButtonText,
  timer,
}) => {
  Swal.fire({
    title: title,
    text: text,
    iconColor: iconColor,
    icon: icon,
    confirmButtonText: confirmButtonText,
    timer: timer,
  });
};
