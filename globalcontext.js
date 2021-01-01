tipper(10);

function tipper(a)
{
	// body...
	var bill=a;
	console.log(`Tip is ${bill+5}`);

}

tipper(5);
tipper("a");

function bigtipper(b)
{
	var bill=b;
	console.log(`Big Tip is ${bill+25}`);
}

bigtipper(100);


// Here name is undefined
console.log(name);
var name="Supraj";
console.log(name);

function sayName(){
	var name="Supu";
	console.log(name);
}
sayName();
// prints the name defined above
console.log(name);

