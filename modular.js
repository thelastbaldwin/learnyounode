var directoryFilter = require('./dirFilter.js'),
	directory = process.argv[2],
	filterExtension = process.argv[3];

var filteredList = directoryFilter(directory, filterExtension, function(err, data){ 
		if(err){
			return console.error("error in directoryFilter callback", err);
		}

		console.log(data.join('\n'));
	});