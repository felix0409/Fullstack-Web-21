const express = require('express');
const app = express();

app.get('/', function(req, res) {
    // response.send("<h1>Hello World!</h1>");
    console.log(__dirname);
    res.sendFile(__dirname + "/html&css/index.html");
});

////// Store all JS and CSS in html&css folder.
app.use("/", express.static(__dirname + '/html&css'));

// app.get('/styles.css', function(req, res) {
//         res.sendFile(__dirname + "/html&css/index.html");
// })

app.get('/about', function(req, res) {
    res.send("Hello World!");
});

// http://localhost:6969/1
// params
app.get('/number/:number', function(req, res) {
    const number = req.params.number;
    res.send(number);
})
// query
// https://localhost:6969/number?number=3&age=19
app.get('/number', function(req, res) {
    const number = req.query.number;
    res.send(number);
})

// ////// Middleware
// app.use(function(req, res) {
//     res.send("404  Not Found")
// })

app.listen(6969, function(error) {
    if(error) console.log(error)
    else console.log("Server starts success!");
});