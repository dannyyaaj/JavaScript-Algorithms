function getAbsSum(arr) {
newArr =  arr.reduce((count, val) => {
return count + Math.abs(val)});

return Math.abs(newArr);
}

