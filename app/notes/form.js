const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

http.createServer(function(req,res) {
    if(req.url === '/fileupload') {
        const form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            console.log(files)
            const oldPath = files.filetoupload[0].filepath;
            const newPath = 'C:/Users/devda/OneDrive/Desktop/' + files.filetoupload[0].originalFilename;
            console.log(newPath)
            fs.rename(oldPath, newPath, function(err) {
                if(err) throw err;
                res.write('File uploaded and moved');
                res.end()
            })
        })
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload">')
        res.write('<input type="submit">')
        res.write('</form>')
        return res.end()        
    }

}).listen(5000)