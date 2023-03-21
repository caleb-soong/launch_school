function cleanUp(text) {
  let cleanText = '';

  for (let idx = 0; idx < text.length; idx += 1) {
    if (isLowerCaseLetter(text[idx]) || isUpperCaseLetter(text[idx])) {
      cleanText += text[idx];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}

console.log(cleanUp("---what's my +*& line?"));