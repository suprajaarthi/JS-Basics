// for(let ind=0;ind<array.length;ind++)
// {
// 	const elem= array[ind];
// }


for(let i=0;i<10;i++)
{
	console.log(i);
}

const states =["TN","AP","Kerala",1947,"UP"];
for(let i=0; i<=states.length;i++)
{
	console.log(states[i]);
}

console.log(states[0]);


// continue 
for(let i=0; i<states.length;i++){
	if(typeof states[i] !== 'string') continue;
	console.log(states[i]);
}

// break
for(let i=0; i<states.length;i++){
	if(typeof states[i] !== 'string') break;
	console.log(states[i]);
}
