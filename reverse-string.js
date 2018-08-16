// Create a function that accepts a string (of a persons first and last name) and returns a string with the first and last name swapped.
  
  // Examples
  // "John Smith" ➞ "Smith John"
  // "Albert Einstein" ➞ "Einstein Albert"

function nameShuffle(str) {
  //arrary containter
  var backName = [];
  str = str.split(' '); //splits into two works '' splits into each letter
  backName.push(str[1], str[0]);
  return backName.join(' ');
}

console.log(nameShuffle("John Smith"));
console.log(nameShuffle("Albert Einstein"));

function nameShuffle(str) {
  str =str.split(' ');
  var backName = [];
  for (var i = 1; i>=0; i--){
    backName.push(str[i]);
  }
  return backName.join(' ');
}

console.log(nameShuffle("John Smith"));

function nameShuffle(str) {
  return str.split(' ').reverse().join(' ');
}

console.log(nameShuffle("John Smith"));