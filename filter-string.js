function filterArray(arr) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++){
    if (typeof arr[i] === "number"){
      newArray.push(arr[i]);
    }
  }
 return newArray;
}

console.log(filterArray([1, 2, "a", "b"]));

function filterArray(arr) {
  var newArray = arr.filter(function(item){
    return typeof item === "number";
  });
  return newArray;
}

console.log(filterArray([1, 2, "a", "b"]));

function filterArray(arr) {
  return arr.filter(item => typeof item === "number")
}

console.log(filterArray([1, 2, "a", "b"]));
console.log(filterArray([1, "a", "b", 0, 15]));