
const http = require('http')
const date = require('./testModule')

http.createServer( function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("the date and time are currently: " + date.myDateTime());
    res.end();
}).listen(5000)

/*

=> go to directory where the file can be called (in this case, cd into the 'functions' folder)
=> "node [this file name].js"
=> check the specified port (in this case, 5000)

the computer is now acting as a server! if anyone tried to access your computer on this port number, 
you'll get the message above

node modules are functions you can import and have access to without any further installation.
You can create your own modules and easily include them in your applications.
We created a custom module "testModule.js" that was imported and used here in this file

*/