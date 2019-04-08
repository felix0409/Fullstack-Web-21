const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", function(req, res) {

})

app.get("/:name", function(req, res) {
    // const name = req.params.name;
    const { name } = req.params;
    const fileData = fs.readFileSync(`./data/${name}.json`, { encoding: 'utf-8' })
    const dataArr = JSON.parse(fileData);
    let html = "<ul>";
    for (let i = 0; i < dataArr.length; i++) {
        let item = dataArr[i];
        html = html + `<li>${item}</li>`;
    }
    
});

app.listen(6969, function(err) {
    if (err) console.log(err)
    else console.log("Sever start success!")
})