# JS-Basics
**ARROW FUNCTION**

```javascript
//regular function call
function add(a)
{ 
  a="supraja";
  return a+"arthi"; 
 }
 // Remove function kewyord 
 add = (a) =>
 { 
 a="supraja";
 return a+"arthi";
 }
 // Remove {} curly braces and parse parameter within () paranthesis
 add=(a="supraja") => a+"arthi";

```

**EVENT HANDLER**

- const variable = document.querySelector(".classname");

- window.getComputedStyle(variable);

- It gives  the color, font family and everything in the tag / class

**OBJECTS**
```javascript
var user = {
name:"",
getUserName:function()
	console.log(`User name is ${this.name}`);
}
// Create obj using "create" keyword
var cat = Object.create(user);
cat.name="cat";
// Create obj using "new" keyword
var bat = new user("bat");
```
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

<b>PROTOTYPES</b>

Prototyes can inject your own stuff by
- access or give properties 
- give functions
- getters 
- setters
- methods 
- can act as constructors to override the properties
	- It runs outside of the object 
	- And accesses the properties of the function
- Prototype has its properties like 
	- fill,filter 
	- hasOwnProperty
	
**SELF EXECUTING ANONYMOUS FUNCTIONS**
- Does not have a name 
- Cannot be called 
- Syntax 
```javascript
(function(){
console.log("Say Hello");
})();
```

**FUNCTIONAL PROGRAMMING**
- Instead of being declared in global variable , values are passed in parameters
- Instead of reusing the same variables, new variables are being used
- Functions can be used in parameters and return values
