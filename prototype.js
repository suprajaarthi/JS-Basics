var user = function (fname,courseco) {
	// body...
	this.fname = fname;
	this.courseco=courseco;
	this.getCourseCount = function () {
		// body...
		console.log(`Course count is : ${this.courseco}`);
	}
}

var supu =new user("supu",2);
supu.getcourseccount();

console.log(supu);
console.log(supu.fname);
console.log(supu.getcourseccount());
console.log(supu.getfname());


//  To create a func to return fname similar to getcourseccount() - use prototype
/* Prototyes can inject your own stuff by
- access or give properties 
- give functions
- getters 
- setters
- method 
- can act as constructors to override the properties
It runs outside of the object and access the properties 
*/
user.prototype.getfname=function(){
	console.log(`Your firstname is ${this.fname}`);
}



