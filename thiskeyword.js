// this gives access to global context


// Part 1 for this kw 
//  understand what is this 
console.log(this)
//  When we run with node engine empty paranthesis 
// In browser:
// Window {0: global, window: Window, self: Window, document: document, name: "", location: Location, …}


var game="cricket";
function playgame(argument) {
	// body...
	var name="Supu";
	console.log(this);

}

playgame();

// Window {0: global, window: Window, self: Window, document: document, name: "", location: Location, …}

/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
  }
}

*/

