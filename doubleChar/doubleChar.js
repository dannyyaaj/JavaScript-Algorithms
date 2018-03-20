function doubleChar(str) {
newArr = str.split('');
newArr2 = newArr.map(function(val) {
return val + val}).join('');

return newArr2;
}

console.log(doubleChar('string'));