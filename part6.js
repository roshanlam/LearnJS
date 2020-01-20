// Data Types

 let Age = 18; // number
 let Name = 'Roshan' // string
 let fullName = {first: 'Roshan', last: 'Lamichhane'}; // object
 let truth = false; // boolen
 let list = ['macbook pro', 'iphone', 'watch', 'mustang']; // array
 let random; // undefined 
 let nothingButSomething = null; // value null

 // string in javascripts

 let food = 'mango';
 let foodAndDrink = 'mango\nlassi' // \n creates a new line

 console.log(food.length); // prints out the length of whatever the food's name is 

 // figure out what these mean by yourself. Use google, (hint: stackoverflow)
 console.log(food.indexOf('an'));  
 console.log(food.slice(2,6));
 console.log(food.replace('go','no'))
 console.log(food.toUpperCase());
 console.log(food.toLowerCase());
 console.log(food.charAt(2));
 console.log(food[2]);


 // welcome back :), hope you had fun lol. 

 console.log(fruit.split(',')); // split by a comma
 console.log(food.split('')); // split by characters 

 // Array 
 let foods = ['ladoo', 'mango', 'something else'];
 foods = new Array('ladoo', 'mango', 'something else');

 console.log(foods[2]); // access the value at 2nd index

 foods[0] = 'nothing';
 console.log('foods');

 for (let i = 0; i < foods.length; i++){
 	console.log(foods[i]);
 }
