var sentence = "My name is Krissy"

function longestWord(strg){
	var newWord = strg.split(' ');
	var word = 0;
	for (var i = 0; i < newWord.length; i++){
		if (newWord[i].length > word){
			word = newWord[i].length;
		}
	}
	return word;
}
longestWord(sentence);

function maxWord(str){
	var words = str.split(' ');
	var biggestWord = '';
	for (var i = 0; i < words.length; i++){
		if (words[i].length > biggestWord){
			biggestWord = word[i].length;
		}
	}
	return biggestWord;
}
maxWord('My name is Dexter')

var stringOne = 'ball';
var stringTwo = 'llba';

function permutation(one, two){
	return one.split('').sort().join('') == two.split('').sort().join('');
}

permutation(stringOne,stringTwo);


function sum(arr){
	var highNum = Math.max(arr[0], arr[1]);
	var lowNum = Math.min(arr[0], arr[1]);
	var total = 0; 
	for (var i = lowNum; i <= highNum; i++) {
		console.log(h)
		total += i;
	}
	return total;
}

sum ([2,7]);

function list(arry, num){
	arry.splice(0, num);
	return arry;
}

list(['krissy', 'adam', 'Dexter'], 1);

//LET VS VAR
//block and global scope
var a = 4;
if (true){
	var b = 5;
}
console.log(a * b);
//block scope for let
var a = 4;
if(true) {
	let b = 5;
}
console.log(a * b);


