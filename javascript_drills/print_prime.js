var printPrime = function(num){
	if(num === 1 || num === 0 || num < 0){
		return false;
	}
	for(var i = num; i > 0; i--){
		var divisor = i - 1;
		if(num % divisor === 0 && divisor > 1){
			return false;
		} else if(divisor === 1){
			return true;
		}
	}
};

console.log(printPrime(5));