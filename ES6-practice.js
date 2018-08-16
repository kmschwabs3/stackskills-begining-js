var func1 = function() {
	return 'hi;'
}
let fuc2= () => 'hi';
let fuc3 = () => {return 'hi'};

let item = (x,y) => x*y;

let item2 = () => 'cats'; //zeo parameters has to have empty parens

var numbers = [2, 4, 6, 8];
var es5squared = numbers.map(n => n * n);
es5squared;


//Spread
let names = ['adam', 'krissy' , 'dexter']

console.log(...names);

let words = ['adam', 'blue','red'];

funtion madLib (name, favColor, notFav){
	return `${name} likes the ${favColor} but not ${notFav}.`
}

madLib(...words);


