var isPalindrome = function(word){
    var len = word.length;
	for(var i = 0; i < Math.floor(len / 2); i++){
		if(word[i] !== word[len - 1 - i]){
			return false;
		} else {
			return true;
		}
	}
}

console.log(isPalindrome("racecar"));
