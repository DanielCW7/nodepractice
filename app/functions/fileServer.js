// serve summer.html and winter.html files (think of page routing)
// localhost:5000/summer.html

const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function(req, res){
    var q = url.parse(req.url, true);
    var fileName = "." + q.pathname;

    console.log(q, fileName)
    fs.readFile(fileName, function(err, data) {
        if(err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 not found")
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end()
    })
}).listen(5000)