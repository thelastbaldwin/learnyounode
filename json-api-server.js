// Write an HTTP server that serves JSON data when it receives a GET request to the
// path '/api/parsetime'. Expect the request to contain a query string with a key
// 'iso' and an ISO-format time as the value.

// For example:

//   /api/parsetime?iso=2013-08-10T12:10:15.474Z

// The JSON response should contain only 'hour', 'minute' and 'second' properties.
// For example:

//     {
//       "hour": 14,
//       "minute": 23,
//       "second": 15
//     }

// Add second endpoint for the path '/api/unixtime' which accepts the same query string
// but returns UNIX epoch time under the property 'unixtime'. For example:

//     { "unixtime": 1376136615474 }

// Your server should listen on the port provided by the first argument to your program.
'use strict';

var http = require('http'),
    url = require('url'),
    server = http.createServer(function (req, res){
        if(req.method !== 'GET'){
            return res.end('Requires GET method');
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        var parsedUrl = url.parse(req.url, true),
            iso = parsedUrl.query.iso,
            reqDate = new Date(iso);

        if(parsedUrl.pathname === '/api/parsetime'){
            var dateRes = {
                'hour' : reqDate.getHours(),
                'minute' : reqDate.getMinutes(),
                'second' : reqDate.getSeconds()
            };

            res.end(JSON.stringify(dateRes));
        }
        else if(parsedUrl.pathname === '/api/unixtime'){
            var formattedTime = {
                'unixtime' : reqDate.getTime()
            };

            res.end(JSON.stringify(formattedTime));
        }

    });
server.listen(process.argv[2]);
