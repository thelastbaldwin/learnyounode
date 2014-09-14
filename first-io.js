var fs = require('fs'),
	path = process.argv[2],
	fileBuffer = fs.readFileSync(path),
	file = fileBuffer.toString();

console.log(file.split('\n').length - 1);