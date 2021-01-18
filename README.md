# JS-Basics
Basics of Javascript

EVENT HANDLER 

const variable = document.querySelector(".classname");

window.getComputedStyle(variable);

gives  the color, font family and everything in the tag / class

OBJECTS

obj {prop:value}
obj has 
	- constructor 
	- prototype 
Assume the following scenario : 
every time the user signs into a page 
- he is assigned certain properties 
- props like fname,lname,..
- note that username shd be unique
- each time a new instance is created

new keyword 

- 1 new kw makes use of the entire syntax 
- 2 It invokes the custom constructor and creating a unique instance every single time 
- 3 new creates a new copy of the entire obj 

We saw that whenever there is a regular func call it refers to a window obj , 
w/o using new keyword it gives undefined
bcoz w/o "new" it refers to window obj which is {} empty obj so it gives undefined 
it is a regular fun call
seperate instances of users are created
