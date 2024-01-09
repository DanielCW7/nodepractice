// create demoText file
const fs = require('fs');

fs.appendFile('./demoText.txt', 'You can delete this file using [node testDelete]', function(err) {
    if(err) throw err;
    console.log('saved')
})

// fs.open('demoText2.txt', 'w', function(err, file) {
//     if(err) throw err;
//     console.log('saved')
// })


/*

fs.appendFile()
    Creates a new file if one doesn't exist, or updates the existing file,
    check demoText.txt

fs.open()
    takes a flag as a second argument, if the flag is "w" for "writing", the
    specified file is opened for writing. If the file does not exist, an empty
    file is created

*/