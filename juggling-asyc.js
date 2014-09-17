// This problem is the same as the previous problem (HTTP COLLECT) 
// in that you need to use http.get(). However, this time you will 
// be provided with three URLs as the first three command-line 
// arguments.

// You must collect the complete content provided to you by each 
// of the URLs and print it to the console (stdout). You don't 
// need to print out the length, just the data as a String; one 
// line per URL. The catch is that you must print them out in the 
// same order as the URLs are provided to you as command-line 
// arguments.

var http = require('http'),
	bl = require('bl'),
	urls = process.argv.slice(2),
	responses = [],
	responseCount = 0, 
	checkIfDone;

urls.forEach(function(url, index){
	http.get(url, function(response) {
		response.setEncoding('utf8');
  		response.pipe(bl(function (err, data) { 
	  		responses[index] = data;
	  		responseCount++;
  		}));
	});
});

checkIfDone = setInterval(function(){
	if(responseCount === urls.length){
		for(var i = 0; i < responses.length; i++){
			console.log(responses[i].toString());
		}
		clearInterval(checkIfDone);
	}
}, 500);




