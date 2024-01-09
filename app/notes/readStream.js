const fs = require('fs');

const rs = fs.createReadStream('./demoText.txt');
rs.on('open', function() {
    console.log('this file is open')
})