/*
  Functions. 

  By the way this is a multi line comment.
 */

 // create a function

 function fun(){
 	// tell the function to do something
 	// look at code below for example
 	var name = prompt('what is your name?');

 	// if statement 
 	if(name = 'Ruth')
 		alert('Roshan has a crush on you :)');

 }

 // call the function, if you don't then the code won't run
 fun();

// yup, that's it 

// Now let's create a function that will take a name and will say hello followed by a name

function greeting(){
	var name = prompt('what is your name?');
	var result = 'Hello' + ' ' + name; // This is called String Concatenation, it means you are putting two string together
	console.log(result);
}

greeting();

// Add 2 numbers together in a function

function SumNum(num1, num2){
	var result = num1 + num2;
	console.log(result);
}
