var compress = function(word){
	var count = 1;
	var newString = "";
	for(var i = 0; i < word.length; i++){
		if(word[i] === word[i + 1]){
			count+=1;
		} else if(word[i] !== word[i + 1]){
			if(count > 1){
				newString += count + word[i];
			} else {
				newString += word[i];
			}
			count = 1;
		};
	};
	return newString;
};

console.log(compress("AAASSSDDDDRDDSASSDDDSSSAD"));