// renaming the demoText4 file
const fs = require('fs');

fs.rename('dmoText4.txt', 'demoText4.txt', function(err) {
    if(err) throw err;
    console.log('file renamed')
})