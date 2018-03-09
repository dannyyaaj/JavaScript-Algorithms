function isValidTime (time) {
  let timeArray = time.split(':');

  if (Number(timeArray[0]) > 23) {
      return false;
  } else if (Number(timeArray[1] > 59)) {
    return false;
  }
  
  return true;
}

console.log(isValidTime('24:00'));
console.log(isValidTime('22:10'));
console.log(isValidTime('14:23'));
console.log(isValidTime('14:78'));