function generateHexadecimalCharacter() {
  let randomNumber = Math.floor(Math.random() * 16);
  if (randomNumber < 10) {
    return randomNumber.toString();
  } else {
    return String.fromCharCode(randomNumber + 87);
  }
}

function generateUUID() {
  let UUID = '';
  while (UUID.length < 36) {
    UUID += generateHexadecimalCharacter();
  }
  let arrayUUID = UUID.split('');
  for (let index = 0; index < arrayUUID.length; index += 1) {
    if (index === 8 ||
        index === 13 ||
        index === 18 ||
        index === 23) {
      arrayUUID[index] = '-';
    }
  }
  UUID = arrayUUID.join('');
  return UUID;
}

console.log(generateUUID());