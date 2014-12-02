var albums = [
    {'name': 'Gossamer', 'artist': 'Passion Pit'},
    {'name': 'Sigh no more', 'artist': 'Mumford and Sons'},
    {'name': 'Time to Pretend', 'artist': 'MGMT'}
];



var pluck = function(someArray,someKey){
	return someArray.map(function(el){
		return el[someKey];
	});
};


// console.log(pluck(albums, "artist"));