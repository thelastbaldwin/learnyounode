// Write a TCP time server!

// Your server should listen to TCP connections on the port 
// provided by the first argument to your program. For each 
// connection you must write the current date & 24 hour 
// time in the format:

//     "YYYY-MM-DD hh:mm"

// followed by a newline character. Month, day, hour and 
// minute must be zero-filled to 2 integers. For example:

//     "2013-07-06 17:42"

//http://stackoverflow.com/questions/10073699/pad-a-number-with-leading-zeros-in-javascript
function padNumber(number, width, character){
	var padCharacter = character || '0',
		numString = number.toString();
		
	return numString.length >= width ? numString : new Array(width - numString.length + 1).join(padCharacter) + numString;
}

var net = require('net'),
	port = process.argv[2],
	server = net.createServer(function (socket) {
		var now = new Date(),
			year = now.getFullYear().toString(),
			month = padNumber(now.getMonth() + 1, 2),
			day = padNumber(now.getDate(), 2),
			hour = padNumber(now.getHours(), 2),
			minutes = padNumber(now.getMinutes(), 2),
			formattedDate = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes;

			socket.write(formattedDate + '\n');
			socket.end();
	});
	
server.listen(port)

