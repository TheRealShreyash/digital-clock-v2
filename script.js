const time = document.querySelector(".timestring");
const date = document.querySelector(".date");
const meridian = document.querySelector(".meridian");

const currentDate = new Date();

const day = currentDate.getDate();
const month = currentDate.toLocaleString("default", { month: "long" });
const year = currentDate.getFullYear();
const weekday = currentDate.toLocaleString("default", { weekday: "long" });

function getOrdinalSuffix(day) {
  if (day > 3 && day < 21) return "th"; // Covers 11th to 19th
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

const formattedDate = `${day}${getOrdinalSuffix(
  day
)} ${month} ${year}, ${weekday}`;

date.innerHTML = `${formattedDate}`;

const updateTime = () => {
  const now = new Date();
  const timeString = now.toLocaleTimeString("default", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  meridian.innerHTML = timeString.slice(6).toUpperCase();
  time.innerHTML = timeString.slice(0, 5);
};

setInterval(() => {
  updateTime();
}, 1000);

updateTime();
