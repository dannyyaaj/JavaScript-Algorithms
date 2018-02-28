// solution one
function introduction(firstName, lastName) {
  const introduction = 'Hi, my name is '.concat(firstName, ' ', lastName, '.');
  return introduction;
}
console.log(introduction("Danny", "Yang"));

//solution two
function introduction2(firstName, lastName) {
  const introduction = 'Hi, my name is ' + firstName + ' ' + lastName + '.';
  return introduction;
}
console.log(introduction2("Danny", "Yang"));

//solution three
function introduction3(firstName, lastName) {
  const introduction = `Hi, my name is ${firstName} ${lastName}.`;
  return introduction;
}
console.log(introduction3("Danny", "Yang"));