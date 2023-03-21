function greetings(nameArray, jobObject) {
  return `Hello, ${nameArray.join(' ')}! Nice to have a
  ${jobObject.title} ${jobObject.occupation} around.`;
}

console.log(greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber'}));