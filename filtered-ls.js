var fs = require('fs'),
	path = require('path'),
	directory = process.argv[2],
	filterExtension = "." + process.argv[3],
	filteredList = [];

fs.readdir(directory, function(err, list){
	list.forEach(function(file){
		if(path.extname(file) === filterExtension){
			filteredList.push(file);
		}
	});

	console.log(filteredList.join('\n'));
});