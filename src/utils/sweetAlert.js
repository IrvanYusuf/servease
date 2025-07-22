import Swal from "sweetalert2";

export const swal = ({
  title,
  text,
  icon,
  iconColor,
  confirmButtonText,
  timer,
  showCancelButton = false,
  cancelButtonText = "Cancel",
}) => {
  return Swal.fire({
    title,
    text,
    iconColor,
    icon,
    confirmButtonText,
    timer,
    showCancelButton,
    cancelButtonText,
    reverseButtons: true,
  });
};
