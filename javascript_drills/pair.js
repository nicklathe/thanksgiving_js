var obj = {
    "Anil": "Bridgpal",
    "Sarah": "Hanley",
    "Lenny": "Urbanowski",
}

var pair = function(objVar){
	return Object.keys(objVar).map(function(el){
		tempArray = [];
		tempArray.push(el, objVar[el]);
		return tempArray;
	})
}

console.log(pair(obj));

