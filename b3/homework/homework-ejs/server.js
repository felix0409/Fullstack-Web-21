const express = require("express");
const app = express();
const fs = require('fs');

app.set('view engine', 'ejs');

app.get("/", function(req,res) {
    var path = require('path');
    const testFolder = './data/';
    const fsList = []

    fs.readdirSync(testFolder).forEach(file => {
        fsList.push(path.basename(file, ".json"));
    });

    res.render("homepage",
                {
                    title: "Home",
                    fsList: fsList
                })
})

app.get("/:number", function(req, res){
    const number = req.params.number;
    let jsonData = JSON.parse(fs.readFileSync('data/'+number+'.json', 'utf-8'))
    res.render("layout",
                {
                    title: number,
                    nameList: jsonData
                })
})

app.use(function(req, res){
    res.send("404 not found!!!")
})
app.listen(9999, function(error){
    if(error) console.log(error);
    else console.log("Server start success!");
    });