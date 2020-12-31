//Create an application with the following roles:
// admin	- get full access 
// subadmin - get access to create/delete courses 
// testprep - get access to create/delete tests 
// user		- get access to consume content

var user = "testprep";
switch(user){
	case "admin":
		console.log("You'll get full access ");
		break
	case "subadmin":
		console.log("You'll get access to create/delete courses ");
		break;

	case "testprep":
		console.log("You'll get access to create/delete tests ");
		break;

	case "user":
		console.log("You'll get access to consume content ");
		break;


	default:
		console.log("Trial user");
		break;
}