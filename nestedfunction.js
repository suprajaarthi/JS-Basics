var name ="Supraja Arthi S";

console.log("Line 3");

function sayName() {
	// body...
	var name="Subu";
	console.log("Line 7",name);
	sayNameTwo();

	function sayNameTwo(){
		var name="Supu "
		console.log("Line 11",name);
	}
}


sayName();