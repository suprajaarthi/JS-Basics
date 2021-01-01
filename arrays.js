var name;
var name2;
var name3;

var countries=['India','US','Russia'];

var states = new Array("TN","Delhi","Mumbai");

console.log(states);

console.log(states[0]);

// . gives access to methods 
console.log(states.length);

states[1]="Kerala";

console.log(states);


// not a good data structure - has all datatypes
var user =['Supraja','supr@gmail.com',3,34,true];
console.log(user);

user.pop()
user.pop()
//  last 2 elem are popped
console.log(user);

// ADD elements from beginning 

user.unshift("New val");
console.log(user);

// REMOVE elements from beginning 

user.shift();
console.log(user);

// Find position of an element

console.log(user.indexOf(3));
console.log(user.indexOf('Supraja'));
 console.log(user.indexOf(309));

// from - can be passed to any iterable (Strings,Set,Array..)

console.log(Array.from("supr"));

















