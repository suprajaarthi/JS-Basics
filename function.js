function sayHello(name){
	console.log("Hello World");
	console.log("Hey there ! ",name);
	// using jquery
	console.log(`Hello there ! ${name}.`);
}
sayHello("Supraja");
sayHello("Arthi");


// calling function using variable 

function namestey(){
	return "Hello in India";
}

var greetings = namestey();

console.log(greetings);
console.log(namestey());

