function init() {
	var firstName = "SuprajCat";
	console.log("I am init");
	function sayfirstName(argument) {
		console.log(firstName);
	}
	return sayfirstName;

}
var value =init();
value();

/*
Here init just returns the sayfirstName func 
So the init context is not cleared , it gets stacked 
so assigning it to a variable and calling it gives the o/p
*/
function addition(x){
	return function (y) {
		return x+y;
	}
}

var sum=addition(5);
// sum is same as line 11 , but since there is another parameter pass the parameter value 

console.log(sum(4));

//The parameter can be passed as follows (x:=>any)(y:=>any) due to closure
console.log(addition(7)(7));




