// Write a program that performs an HTTP GET request to a URL provided 
// to you as the first command-line argument. Collect all data from the
//  server (not just the first "data" event) and then write two lines 
//  to the console (stdout).

// The first line you write should just be an integer representing the 
// number of characters received from the server and the second line 
// should contain the complete String of characters sent by the server.

var http = require('http'),
	bl = require('bl');

http.get(process.argv[2], function(response) {
  	response.pipe(bl(function (err, data) { 
  		// this text is wacky 
  		console.log(data.length);
  		console.log(data.toString());
  	}));
});

