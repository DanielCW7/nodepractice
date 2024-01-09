// create a server and use the 'date' module
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

*/