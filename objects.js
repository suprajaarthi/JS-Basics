/*obj is spinal cord of js 
even api's are objects 
they are key:value pairs*/
var user = {

	firstName:"Supraja",
	lastName:"Arthi",
	role:"Admin",
	loggedCount:35,
	facebookSignedIn:true
}

// access values
console.log(user.firstName);
console.log(user["lastName"]);

// change values
console.log(user.loggedCount);
user.loggedCount=45;
console.log(user.loggedCount);

console.table(user);
