const padStart = (value) => {
  return String(value).padStart(2, "0");
};

export default function transformDate(ms) {
  const months = [
    "січня",
    "лютого",
    "березня",
    "квітня",
    "травня",
    "червня",
    "липня",
    "серпня",
    "вересня",
    "жовтня",
    "листопада",
    "грудня",
  ];

  const date = new Date(ms);
  const minutes = date.getMinutes();
  const hour = date.getHours();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${padStart(day)} ${months[month]}, ${year} | ${padStart(
    hour
  )}:${padStart(minutes)}`;
}
