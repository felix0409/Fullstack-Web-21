const express = require("express");
const app = express();
app.get('/', function(request, response) {
    response.sendFile(__dirname+"/html&css/index.html");
});
app.use("/static",express.static(__dirname + '/html&css'));
//http:localhost:6969/number/3
//params
//http:localhost:6969/number/
app.get("number/:number", function(req, res) {
    const number = req.params.number;
    res.send(number);
})

//http://localhost:6969/number?number=3?age=19
//query
//?number=3?age=19 => {number: 3, age: 19}
// app.get("/:number", function(req, res) {
//     const number = req.query.number;
//     res.send(number);
// })

//middleware
// app.use(function(req, res){
//     res.send("404 not found!!!")
// })
app.listen(6969, function(error){
if(error) console.log(error)
else console.log("Server start success!");
});