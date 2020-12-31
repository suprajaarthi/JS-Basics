/*



*/
// var getUserRole=function(name,role) 
var getUserRole=(name,role)=> {
// function getUserRole(name,role)

	switch(role){
		case "admin":
			return `${name} You'll get full access `;
			break
		case "subadmin":
			return `${name} You'll get access  to create/delete courses`;
			break;

		case "testprep":
			return `${name} You'll get full access  to create/delete tests` ;
			break;

		case "user":
			return `${name} You'll get full access  to consume content `;
			break;


		default:
			console.log("Trial user");
			break;
}
}

console.log(getUserRole("Supraja","admin"));

var getRole=getUserRole("Arthi","admin");
console.log(getRole);






