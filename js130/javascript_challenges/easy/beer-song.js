class BeerSong {
  static verse(bottles) {
    if (bottles > 1) {
      return `${bottles} bottles of beer on the wall, ${bottles} bottles of beer.\n` +
      `Take one down and pass it around, ${bottles - 1} bottle${bottles > 2 ? 's' : ''} of beer on the wall.\n`;
    } else if (bottles === 1) {
      return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
      "Take it down and pass it around, no more bottles of beer on the wall.\n";
    } else {
      return "No more bottles of beer on the wall, no more bottles of beer.\n" +
      "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
    }
  }

  static verses(start, end) {
    let bottles = start;

    let song = '';

    let verse1 = "1 bottle of beer on the wall, 1 bottle of beer.\n" +
    "Take it down and pass it around, no more bottles of beer on the wall.\n\n";

    let verse0 = "No more bottles of beer on the wall, no more bottles of beer.\n" +
    "Go to the store and buy some more, 99 bottles of beer on the wall.\n";

    while (bottles >= end && bottles > 1) {
      let verse = `${bottles} bottles of beer on the wall, ${bottles} bottles of beer.\n` +
      `Take one down and pass it around, ${bottles - 1} bottle${bottles > 2 ? 's' : ''} of beer on the wall.\n\n`;
      
      song += verse;

      bottles -= 1;
    }

    if (end > 1) {
      return song.slice(0, song.length - 1);
    } else if (end === 1) {
      return song + verse1.slice(0, verse1.length - 1);
    } else {
      return song + verse1 + verse0;
    }
  }

  static lyrics() {
    let bottles = 99;

    let song = '';

    let end = "1 bottle of beer on the wall, 1 bottle of beer.\n" +
    "Take it down and pass it around, no more bottles of beer on the wall.\n\n" +
    "No more bottles of beer on the wall, no more bottles of beer.\n" +
    "Go to the store and buy some more, 99 bottles of beer on the wall.\n";

    while (bottles > 1) {
      let verse = `${bottles} bottles of beer on the wall, ${bottles} bottles of beer.\n` +
      `Take one down and pass it around, ${bottles - 1} bottle${bottles > 2 ? 's' : ''} of beer on the wall.\n\n`;
      
      song += verse;

      bottles -= 1;
    }

    song += end;

    return song;
  }
}

module.exports = BeerSong;