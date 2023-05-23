const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function timeOfDay(minutes) {
  while (minutes < 0) {
    minutes += MINUTES_PER_DAY;
  }
  let hours = 0;
  while (minutes >= MINUTES_PER_HOUR) {
    hours += 1;
    minutes -= MINUTES_PER_HOUR;
  }
  while (hours >= HOURS_PER_DAY) {
    hours -= HOURS_PER_DAY;
  }
  if (hours < 10) {
    hours = '0' + String(hours);
  }
  if (minutes < 10) {
    minutes = '0' + String(minutes);
  }
  return String(hours) + ':' + String(minutes);
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");