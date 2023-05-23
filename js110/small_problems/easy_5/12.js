const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeOfDay) {
  if (timeOfDay === '24:00') {
    return 0;
  }
  let hour = (10 * Number(timeOfDay[0])) + Number(timeOfDay[1]);
  let minute = (10 * Number(timeOfDay[3])) + Number(timeOfDay[4]);
  return (hour * MINUTES_PER_HOUR) + minute;
}

function beforeMidnight(timeOfDay) {
  if (timeOfDay === '00:00') {
    return 0;
  }
  let hour = (10 * Number(timeOfDay[0])) + Number(timeOfDay[1]);
  let minute = (10 * Number(timeOfDay[3])) + Number(timeOfDay[4]);
  return MINUTES_PER_DAY - ((hour * MINUTES_PER_HOUR) + minute);
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);