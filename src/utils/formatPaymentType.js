export const formatPaymentType = ({ type = "bank_transfer" }) => {
  return type === "bank_transfer" ? "Bank Transfer" : "Tunai";
};
