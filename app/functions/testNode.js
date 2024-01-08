
const http = require('http')
const date = require('./testModule')

http.createServer( function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("the date and time are currently: " + date.myDateTime());
    res.end();
}).listen(5000)

/*

How to use:
=> go to directory where the file can be called (in this case, cd into the 'functions' folder)
=> "node [this file name].js"
=> check the specified port (in this case, 5000)

the computer is now acting as a server! if anyone tried to access your computer on this port number, 
you'll get the message above

intro:
node modules are functions you can import and have access to without any further installation.
You can create your own modules and easily include them in your applications.
We created a custom module "testModule.js" that was imported and used here in this file

The built-in HTTP module:
Node.js has a built in module called 'HTTP' which allows node.js to transfer data over http protocol.
to include this module, use the 'require()' method

Node.js as a web server:
the HTTP module can create an HTTP server that listens to server ports and gives a response back to 
the client. use the 'createServer()' method to create an HTTP server.
=> http.createServer(function(req, res) { ... })
the function passed into the 'createServer()' method will be executed when someone tries to access
the computer on port 5000

Add an HTTP header:
If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP
header with the correct Content-Type
=> res.writeHead(200, {'Content-Type': 'text/html'});
The first argument is the status code and the second is the response header

Parsing a URL:
There's a built-in module that will easily split the url into readable parts.
=> const url = require('url')
=> const i = url.parse(req.url, true).query

Node.js as a file server:
Node.js has a file system module that allows you to work within the file system on the computer: 'fs'
=> const fs = require('fs')
you can perform CRUD operations with this module, which is common

Read files:
The 'fs.readFile()' method is used to read files on your computer.
Assuming we have an HTML file to use, we can read the file and return the content.
=> fs.readFile('demoFile.html', function(err, data) { ... })
*/