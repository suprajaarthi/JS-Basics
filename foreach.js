const states =["TN","AP","Kerala",1947,"UP"];
var i=0;

// what takes the for loop ahead shd be inc/dec
for(;;)
{
	if(i>3) break;
	console.log(i);
	i++;
}

/*To loop through the array elements iteratively 
you need [i] to access them 
for-each just requires callback function*/

console.log("     ");
states.forEach((s)=>console.log(s));




