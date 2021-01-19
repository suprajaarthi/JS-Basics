# JS-Basics

**EVENT HANDLER**

- const variable = document.querySelector(".classname");

- window.getComputedStyle(variable);

- It gives  the color, font family and everything in the tag / class

**OBJECTS**

- obj {prop:value}
- obj has 
	- constructor 
	- prototype 
- Assume the following scenario : 
- every time the user signs into a page 
- he is assigned certain properties 
- props like fname,lname,..
- note that username shd be unique
- each time a new instance is created

**NEW KEYWORD**

-  new kw makes use of the entire syntax 
-  It invokes the custom constructor and creating a unique instance every single time 
-  new creates a new copy of the entire obj 
-  It creates unique instances and objects through the obj call
	- We saw that whenever there is a regular func call it refers to a window obj , 
	- w/o using new keyword it gives undefined
	- bcoz w/o "new" it refers to window obj which is {} empty obj so it gives undefined
	- seperate instances of users are created

**THIS KEYWORD**

- this keyword either contains window object / whatever the global obj is
 	- in node global obj is {} empty obj 
 	- or the object we have predefined 
 - All regular function calls are window objects
 - If it is an obj call rather than func call, this kw points to the object 
