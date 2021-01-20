var user = {
	// body...
	fname :"",
	
	getUserName : function () {
		// body...
		console.log(`User name  is : ${this.name}`);
	},
};

var cat = Object.create(user);
console.log(cat);
cat.name="Pussy Cat";
cat.getUserName();

//  To add other properties
var bat =Object.create(user,{
	name:{value:"bat"},
	courseco:{value:3},
});

bat.getUserName();