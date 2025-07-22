export function formatDate({ date, show = "full" }) {
  const options = {
    weekday: "long", // Senin
    year: "numeric", // 2025
    month: "long", // Juli
    day: "numeric", // 9
    timeZone: "Asia/Jakarta",
  };

  if (show === "full") {
    options.hour = "2-digit";
    options.minute = "2-digit";
    options.hour12 = false;
  }

  return new Date(date).toLocaleString("id-ID", options);
}
