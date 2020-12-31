
// Anything other than these values are considered as truthy 
// undefined 
// null 
// 0
// ''
// NaN

var user="2"
// Type Coercio
if(2===user)
{
	console.log("Condn 1 is True");
}

if("2"===user)
{
	console.log("Condn 2 is True");
}

if(2==user)
{
	console.log("Condn 3 is True");
}

console.log("2"+"2");
console.log(2+"2");
console.log("2"+2);
