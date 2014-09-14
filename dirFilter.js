module.exports = function(directory, extensionFilter, callback){
	var fs = require('fs'),
		path = require('path'),
		extensionFilter = (extensionFilter[0] === '.') ? extensionFilter : '.' + extensionFilter,
		filteredList = [];

	fs.readdir(directory, function(err, list){
		if(err){
			return callback(err);
		}

		list.forEach(function(file){
			if(path.extname(file) === extensionFilter){
				filteredList.push(file);
			}
		});

		if(typeof callback === 'function'){
			callback(null, filteredList);
		}
	});
}