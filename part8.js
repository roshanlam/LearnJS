// Objects in javascript

let student = {
	first: 'Roshan',
	last: 'Lamichhane', 
	age: 25, // Not real age
	height: 72, // in inches
	studentInfo: function(){
		return this.first + '\n' + this.last + '\n' this.age;
	}
};

// console.log(student.first);
// console.log(student.last);

student.age++;
console.log(student.age);
console.log(student.studentInfo());
