export const limitAddress = (address) => {
  return [...address.slice(0, 40), "..."];
};
export const limitOrderNumber = (number) => {
  return [...number.slice(0, 10), "..."];
};

export const hidePhoneNumber = (phoneNumber) => {
  const visibleDigits = 3;
  return (
    "*".repeat(phoneNumber.length - visibleDigits) +
    phoneNumber.slice(-visibleDigits)
  );
};

export const truncateText = ({ length = 30, text = "" }) => {
  return text.length > length ? `${text.slice(0, length)}....` : text;
};

export const hideEmail = (email) => {
  const [username, domain] = email.split("@");
  const maskedUsername =
    username.substring(0, 2) + "*".repeat(username.length - 2);
  return `${maskedUsername}@${domain}`;
};

export function copyToClipboard(payload) {
  return navigator.clipboard.writeText(payload);
}
