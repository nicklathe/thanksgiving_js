var artists = ["Passion Pit", "Mumford and Sons", "MGMT"];
var albums = ["Gossamer", "Sigh no more", "Time to Pretend"];

var zip = function(array, array2){
	return array.map(function(element, index){
		var newArray = [];
		newArray.push(element, array2[index]);
		return newArray;
	});
};

console.log(zip(artists, albums));

var zip2 = function(array, array2){
	newArray = [];
	array.forEach(function(element, index){
		newArray.push([array[index], array2[index]]);
	});
	return newArray;
}

console.log(zip2(artists, albums));