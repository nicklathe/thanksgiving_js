// var fib = function(num){
// 	var previous = 0;
// 	var current = 1
// 	var temp = i;

// 	for(var i = 0; i <= num; i++){
// 		temp = current;
// 		current = previous + current;
// 		previous = temp;
// 		console.log(current);
// 	}
// }


// fib(20);


var fib2 = function(num){
	if( num <= 1 ){
		return num;
	}
	return fib2(num - 1) + fib2(num - 2);
};


console.log(fib2(9));