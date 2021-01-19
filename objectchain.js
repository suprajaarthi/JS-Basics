var user = function (fname,courseco) {
	// body...
	this.fname = fname;
	this.courseco=courseco;
	this.getCourseCount = function () {
		// body...
		console.log(`Course count is : ${this.courseco}`);
	}
}

var supu =new user("supu",2);
// supu.getCourseCount();
user.prototype.getfname=function(){
	console.log(`Your firstname is ${this.fname}`);
}


// console.log(supu);
console.log(supu.fname);

user.prototype.getfname=function(){
	console.log(`Your firstname is ${this.fname}`);
}
// While declaring func if fname is by mistake written as fnamee it gives undefined
if(supu.hasOwnProperty("fname"))
{
	console.log(`Name after having hasOwnProperty is ${supu.fname}`);
}