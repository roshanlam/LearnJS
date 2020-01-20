// array common methods 
 console.log('to string', fruits.toString());
 console.log(foods.join(' * '));
 console.log(foods.pop(), foods); // removers the last item
 console.log(foods.push('blackberries'), foods); // appends 
 console.log(foods[4]);
 foods[foods.lenth] = 'new food' // same as push
 console.log(foods)
 foods.shift(); // removes the first element from an array
 console.log(foods)
 foods.unshidt('litchi'); // adds first element to an array  

 let electroncis = ['TV', 'Laptop', 'Powerbank'];
 let all = foods.concat(electroncis);l // combines the arrays food and electroncis

 console.log(all);
 console.log(all.slice(1,3));
 console.log(all.reverse());

 let sNum = [5,-1,0,9999,875,385,69];
 console.log(sNum.sort(function(a,b) {return a-b})); // sorted in ascending order 
 console.log(sNum.sort(function(a,b){return b-a})); // sorted in descending order


let emptyArray = new Array();
for (let num = 0; num <= 10; num++){
	emptyArray.push(num);
}

console.log(emptyArray);
