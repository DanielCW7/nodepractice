// file intended to test the CREATE of CRUD functions

const fs = require('fs')
const http = require('http')
const date = require('./testModule')

http.createServer( function(req, res) {
    fs.readFile(/* html file */, function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("the date and time are currently: " + date.myDateTime());
        res.end();        
    })
}).listen(5000)

