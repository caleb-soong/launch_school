class Series {
  constructor(digitsString) {
    this.digitsString = digitsString;
  }

  slices(seriesLength) {
    if (seriesLength > this.digitsString.length) {
      throw new Error('The number of digits in the series cannot exceed the number of digits used to construct the series.');
    }

    let allSeries = [];

    for (let seriesStart = 0; seriesStart <= this.digitsString.length - seriesLength; seriesStart += 1) {
      let series = this.digitsString.slice(seriesStart, seriesStart + seriesLength)
      
      allSeries.push(series.split('').map(digit => Number(digit)));
    }

    return allSeries;
  }
}

module.exports = Series;