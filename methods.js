var user = {

	firstName:"Supraja",
	lastName:"Arthi",
	role:"Admin",
	loggedCount:35,
	facebookSignedIn:true,
	courseList:[],
	buyCourse:function (courseName) {
		// body...

		this.courseList.push(courseName);
	},

	getCourseCount : function()
	{
		return `${this.firstName} is enrolled in a total 
		of ${this.courseList.length} courses`;
	},
}; 


var courseList=true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("Node course")
console.log(user.getCourseCount());
user.buyCourse("Flutter course")
user.buyCourse("JS course")
user.buyCourse("Angular course")

console.log(user.getCourseCount());
