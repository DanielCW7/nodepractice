// update the demoText3 file
const fs = require('fs');

fs.writeFile('demoText3.txt', 'This file is for being updated', function(err) {
    if(err) throw err;
    console.log('saved')
})