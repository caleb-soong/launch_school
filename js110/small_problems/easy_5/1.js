function dms(number) {
  let degrees = String(Math.floor(number));
  let minutes = String(Math.floor((number - degrees) * 60));
  if (Number(minutes) < 10) {
    minutes = '0' + minutes;
  }
  let seconds = String(Math.round((((number - degrees) * 60) - minutes) * 60));
  if (Number(seconds) < 10) {
    seconds = '0' + seconds;
  }
  return degrees + '°' + minutes + "'" + seconds + '"';
}

console.log(dms(30));
console.log(dms(76.73));
console.log(dms(254.6));
console.log(dms(93.034773));
console.log(dms(0));
console.log(dms(360));