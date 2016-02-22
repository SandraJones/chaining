//**********Using one single line of JavaScript code, 
//**********complete the following tasks on the array of 
//**********integers below.
//**********Sort the numbers in descending order (10, 9, 8, 7, etc).

//declare array and global variables
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
var sortedInt;
var underNineteen;
var total;

// //create a sort function
// function firstSort() {
//   sortedInt = integers.sort(
//   function(first, second) {
//   	return first - second;
//   }
// 	);
// }
// //create a reverse function
// function reversing() {
// 	sortedInt.reverse();
// 	console.log("reverseSort", sortedInt);
// }


// //create a function that omits values over 19
// function nineteenOmit() {
// var underNineteen = sortedInt.splice(0).splice(1).splice(2);
//     console.log("under19", underNineteen);
// }   
// // Multiply each remaining number by 1.5 and then substract 1.
// //Do the math and log it
// //(I REALIZE THIS SECTION BELOW IS WRONG, just CAN'T FIGURE OUT YET)
// function multi() {
// 	total = 0;
// 	for (var i=0; i<underNineteen.length; i++){
//     total += underNineteen[i]*1.5;
//       return total-1;	
//   		console.log("FinalValue",total);
// 		};
// 	}

// firstSort();reversing();nineteenOmit();multi;


// Then output (either in the DOM or the console) the sum of all the resulting numbers.
//final answer must be one long statement something like:
// integers.sort(first,second).reverse().map().reduce();



// this.integers = integers.sort(function(first,second){return a - b}).
//    sortedInt = integers.sort(
//   function(first, second) {
//   	return first - second;
//   }
// 	);.reverse().splice(0).splice(1).splice(2))*1.5)-1;



 this.integers = integers.sort(function(a,b)
 	{return a-b}).reverse(function reversing() 
 	{return sortedInt}).filter(function filter(sortedInt[0,1,2,3]){return sortedInt}).map(this).reduce(function(prev, curr){
   return prev + curr}); return this;






// 	sortedInt.reverse();
// 	console.log("reverseSort", sortedInt);
// } function nineteenOmit() {
// 		var underNineteen = sortedInt.splice(0).splice(1).splice(2);
//     console.log("under19", underNineteen);
// }   