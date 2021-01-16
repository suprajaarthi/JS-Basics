/* this keyword either contains window object or the object
 we have defined which creates a confusion /*

/* whatever the global window object is - this keyword points to */

/* regular func calls means whatever the window obj is or the global obj is */


console.log(this);
// returns an empty object 

var user = {
	firstName : "Supraja",
	courseCount :6,
	getCourseCount : function () {
		// body...
		console.log("LINE 17",this);
		function sayHello(){
		console.log(" HELLO");
		console.log("LINE 20",this);
		// in this case it is said that it gives same as line 17 
		// which is not true
}
sayHello();

	},

};

//  invoke the func 
// this is not regular func call - it is calling func through an obj 
user.getCourseCount();
// output:
// Window {0: global, window: Window, self: Window, document: document, name: "", location: Location, …}
// 0: global {window: global, self: global, location: {…}, closed: false, frames: global, …}
// VM63:9 LINE 17 {firstName: "Supraja", courseCount: 6, getCourseCount: ƒ}


// the following is  a regular func call 


function sayHello(){
	console.log("Line 35 HELLO");
}
sayHello();
