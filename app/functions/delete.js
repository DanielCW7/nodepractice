// deletes the demoText file
const fs = require('fs');

fs.unlink('./demoText.txt', function(err) {
    if(err) throw err;
    console.log('file deleted')
})