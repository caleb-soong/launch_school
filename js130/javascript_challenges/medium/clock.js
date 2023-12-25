class Clock {
  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }

  static at(hours, minutes = 0) {
    return new Clock(hours, minutes);
  }

  toString() {
    return `${this.hours > 9 ? String(this.hours) : '0' + String(this.hours)}` + ':'
            + `${this.minutes > 9 ? String(this.minutes) : '0' + String(this.minutes)}`;
  }

  add(minutes) {
    let totalMinutes = (this.hours * 60) + this.minutes + minutes;
    let newHours = Math.floor(totalMinutes / 60);

    while (newHours > 23) {
      newHours -= 24;
    }

    let newMinutes = totalMinutes % 60;

    return new Clock(newHours, newMinutes);
  }

  subtract(minutes) {
    let totalMinutes = (this.hours * 60) + this.minutes - minutes;

    while (totalMinutes < 0) {
      totalMinutes += 1440;
    }

    let newHours = Math.floor(totalMinutes / 60);
    let newMinutes = totalMinutes % 60;

    return new Clock(newHours, newMinutes);
  }

  isEqual(clock) {
    return this.toString() === clock.toString();
  }
}

module.exports = Clock;