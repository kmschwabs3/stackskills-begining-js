var numbers = [3,2,5,6,7];

numbers.reduce(function(acc, curr){
	if (acc > curr){
		return acc;
	} else {
		return curr;
	}
	
});


var nums = [4,2,4,3,6,7];

var newNumbs = nums.map(function(x){
	return x * 3;
})

newNumbs.reduce(function(combine, init){
	return combine + init;
});