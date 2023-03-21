/* eslint-disable max-len */
let munstersDescription = "The Munsters are creepy and spooky.";
let capitalizedDescription = munstersDescription.toUpperCase();
let reversedDescription = capitalizedDescription.replace('M', 'm');
let finalDescription = reversedDescription[0].toLowerCase() + reversedDescription.slice(1);

console.log(finalDescription);