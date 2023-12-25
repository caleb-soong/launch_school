class Robot {
  static names = [];
  
  name() {
    if (this.robotName) return this.robotName;

    while (Robot.names.includes(this.robotName) || !this.robotName) {
      this.robotName = this.generateName();
    }

    Robot.names.push(this.robotName);
    return this.robotName;
  }

  reset() {
    let nameIdx = Robot.names.indexOf(this.robotName);
    Robot.names.splice(nameIdx, 1);
    this.robotName = null;
  }

  generateName() {
    let name = '';
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let alphaCount = 1; alphaCount <= 2; alphaCount += 1) {
      name += chars[this.randomNum(0, chars.length - 1)];
    }

    for (let digitCount = 1; digitCount <= 3; digitCount += 1) {
      name += this.randomNum(0, 9);
    }

    return name;
  }

  randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
  }
}

module.exports = Robot;