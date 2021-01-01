
// FILL
var array=[2,4,6,3,1,5,9,8];
// console.log(array.fill(0));
// console.log(array.fill("h",0));
console.log(array.fill("h",2,5));
console.log(array.fill("empty"));



// FILTER
const array2=[23,24,25,55,66,77,87,98];
const res = array2.filter((num) => num!=55);
const res2 = array2.filter((num) => num%2==0);
const res3= array2.filter((num) => num>55);

console.log(res);
console.log(res2);
console.log(res3);
