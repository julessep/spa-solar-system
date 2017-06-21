// I couldn't get the planets to print in a sentence like I did with the words array? I'm confused on how to chain the reduce onto them? or how to make it into a sentence??  
var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var newArr = [];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var object = document.getElementById("planets");

planets.forEach(function(planet){
	object.innerHTML += `<p>${planet}</p>`
})

// Use the map method to create a new array where the first letter of each planet is capitalized
let upper = planets.map(function(letter){
	newArr = letter.charAt(0).toUpperCase() + letter.slice(1);
	object.innerHTML += `<p>${newArr}</p>`;
})
// .planets.reduce(function(a, b){
// 	return a + " " + b;
// })


// Use the filter method to create a new array that contains planets with the letter 'e'
let filter = planets.filter(function(letter){
	if(letter.indexOf('e') > -1) {
		object.innerHTML += `<p>${letter}</p>`
	};
})


var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

// Use the reduce method to create a sentence from the words in the following array
let reduce = words.reduce(function(a, b){
	return a + " " + b;
})

object.innerHTML += `${reduce}.`