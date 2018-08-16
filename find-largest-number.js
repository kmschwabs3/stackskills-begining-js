function findLargestNum(arr) {
  var largest = 0;
  for (var i = 0; i < arr.length; i++){
    if (arr[i] > largest){
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargestNum([4, 5, 1, 3]));

function findLargestNum(arr) {
  var largest = arr[0];
  for (var i = 1; i < arr.length; i++){
    if (arr[i] > largest){
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargestNum([4, 5, 1, 3]));

function findLargestNum(arr) {
 return Math.max(...arr);
}

console.log(findLargestNum([4, 5, 1, 3]));
