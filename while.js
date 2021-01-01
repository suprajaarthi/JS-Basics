const states =["TN","AP","Kerala",1947,"UP"];
let i=0;
// while
while(i<states.length)
{
	i++;
	console.log(states[i]);
}

// do while
console.log("do while")
i=0;
const states2 =["TN","AP","Kerala",1947,"UP"];

do{
	i++;
	console.log(states2[i]);
		
}while(i<states2.length-1);


let iter=20;
do{
	console.log(i);
	i++;
}
while(i<10);