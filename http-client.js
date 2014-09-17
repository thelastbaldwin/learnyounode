// Write a program that performs an HTTP GET request to a 
// URL provided to you as the first command-line argument. 
// Write the String contents of each "data" event from the 
// response to a new line on the console (stdout).

var http = require('http');

http.get(process.argv[2], function(res) {
  res.on("data", function(data){
  	//could have also called  response.setEncoding('utf8') to avoid toString
  	console.log(data.toString());
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});