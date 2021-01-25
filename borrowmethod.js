const cat =
{
	fname : "Cat", 
	lname : "Chisoo",
	role : "SDE",
	age  : 15,
	getInfo : function () {
		console.log(
		`First name is ${this.fname}
		Last name is ${this.lname}
		Role of ${this.fname} is ${this.role}
		Age is ${this.age}`

		);
	}
}

cat.getInfo();

// there is another obj called bat 

const bat ={
	fname : "Bat", 
	lname : "man",
	role : "Datascientist",
	age  : 5,

}

// bat doesnt have getInfo func , so it can be borrowed from cat using bind func
// bat.getInfo()
// gives error since getInfo() has not been implemented for the obj - bat 

var batinfo=cat.getInfo.bind(bat);
batinfo();

cat.getInfo.call(bat);





