//  procedural programming 
 
let score = 45; 
function addbonus() {
	score = score+45;
	return score;

}
console.log(addbonus());


// func programming 

function addbonus1(score) {
	return score+45;
}

console.log(addbonus1(45));


// State changes in  Proc prog

sentence = "Hey"
sentence = "Hey There!!!"
sentence = "Hey There, How are you ?!"
console.log(sentence);

// State changes in  Func prog

sentence1 = "Hey"
sentence2 = "Hey There!!!"
sentence3 = "Hey There, How are you ?!"

// same variables are not reused in Functional programming


//Functions can be used as parameter of another func 
// Functions can be used in return values


function geeks_inner(value){ 
    return('hello User!'); 
} 
function geeks_outer(func){  
    return(func()); 
}
console.log(geeks_outer(geeks_inner));

