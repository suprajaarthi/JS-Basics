function isEven(element) {
	// body...
	if(element%2==0)
	{
		return true;
	}

	return false;
}
// Another method
function isEven2(element) {
	return element%2===0;
}

console.log(isEven(2));
console.log(isEven(5));

console.log(isEven2(5));

// if all elem pass the result gives true
var res=[2,4,6,8].every(isEven2);
console.log(res);

/*
callbacks are written using arrow functions
()=>{}
*/

var callback = [2,3,6,9].every((e)=>
{
	return e%2===0;
});

console.log(callback);


// another way for callback 
var another_callback = [2,3,6,9].every((e)=>e%2===0);
console.log(another_callback);







