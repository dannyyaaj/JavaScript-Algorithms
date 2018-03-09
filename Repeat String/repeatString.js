function repeatString(str, num) {
  let repeatedString = '';

  while (num > 0) {
    repeatedString += str;
    num--;
  }

  return repeatedString;
}

console.log(repeatString('Hello', 3))