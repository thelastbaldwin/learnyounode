var fs = require('fs'),
	path = process.argv[2];

fs.readFile(path, function(err, data){
	file = data.toString();
	console.log(file.split('\n').length - 1);
});