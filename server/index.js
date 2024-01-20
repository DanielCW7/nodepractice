// set up expressJS here
// this file will serve as the entry point

const express = require("express")
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
})

/* 

basic routing:
************************
app.METHOD(PATH, HANDLER)
************************

app => an instance of Express
METHOD => an HTTP request method in lowercase
PATH => the path on the server
Handler => the function to be executed when the path is matched

*/

// examples:
app.get('/feed', (req, res) => {
    res.send("getting new posts")
})

app.post('/new-post', (req, res) => {
    res.send("posted something new")
})

app.put("/update-user", (req, res) => {
    res.send("updated a post")
})

app.delete("/delete-post", (req, res) => {
    res.send("deleted post")
})