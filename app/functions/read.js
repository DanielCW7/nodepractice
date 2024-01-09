// creating a server and reading the example.html file

const fs = require('fs')
const http = require('http')

http.createServer( function(req, res) {
    fs.readFile('../example.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();        
    })
}).listen(5000)

