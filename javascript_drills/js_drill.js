// Javascript Drills 

// var albums = [
//     {'name': 'Gossamer', 'artist': 'Passion Pit'},
//     {'name': 'Sigh no more', 'artist': 'Mumford and Sons'},
//     {'name': 'Time to Pretend', 'artist': 'MGMT'}
// ];


// 1. pluck(someArray, "someKey")
var pluck = function(someArray,someKey){
	return someArray.map(function(el){
		return el[someKey];
	});
};

// console.log(pluck(albums, "artist"));

// 2. zip(array, array2)

var artists = ["Passion Pit", "Mumford and Sons", "MGMT"];
var albums = ["Gossamer", "Sigh no more", "Time to Pretend"];

var zip = function(array, array2){
	

	// array.concat(array2);
}

console.log(zip(artists, albums));



