function init() {
	var firstName = "SuprajCat";
	function sayfirstName(argument) {
		console.log(firstName);
	}
	sayfirstName();

}
init();
/*firstname is not a global variable 
 firstName is available only within the scope 
 call sayfirstName() to print the fname 
call init() to call sayfirstName()

*/
