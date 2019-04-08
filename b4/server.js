const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");


// data-typeL application;/x-ww-form-urencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
    // get random question
    const questionList = JSON.parse(fs.readFileSync("questionList.json", {encoding:"utf-8"})); //convert file json -> object
    const randomNumber = Math.floor(Math.random()*questionList.length); // random 0 -> length - 1
    const question = questionList[randomNumber];
    res.send(`
        <h1>${question.content}</h1>
        <form action="/questionListUpdate" method=POST>
            <div>
                <button id="clickyes" onclick="${question.yes++}" name="yes">Sai / Không / Trái</button>
                <button id="clickno" onclick="${question.no++}" name="no">Đúng / Có / Phải</button>
            </div>
            <div>
                <a href="/question/${randomNumber}">Kết quả vote</a>
                <a href="/">Câu hỏi khác</a>
            </div>
        </form>
    `)
    // res.sendFile(__dirname + "/views/home.html");
});

app.post('/questionListUpdate', function(req, res) {
    const questionList = JSON.parse(fs.readFileSync("questionList.json", {encoding:"utf-8"}));
    const randomNumber = Math.floor(Math.random()*questionList.length);
    const question = questionList[randomNumber];

    // const clickyes = document.getElementById('clickyes');
    // const clickno = document.getElementById('clickno');

    // if (clickyes.innerText === "yes") {
    //     question.yes++;
    //     console.log(questionList);
    // } else if (clickno.innerText === "no") {
    //     question.no--;
    //     console.log(questionList);
    // }

    res.send("Voting successfully!");
})

app.get('/ask', function(req, res) {
    res.sendFile(__dirname + "/views/ask.html") //dirname: duong dan tuyet doi
});

app.post('/addquestion', function(req, res) {
    // console.log("Your question is added :)");
    // req.on("data", function(data) {
    //     console.log(data + "");
    // })
    // console.log(req.body); //bodyparser
    const questionList = JSON.parse(fs.readFileSync("./questionList.json", {encoding: "utf-8"}));
    const { question } = req.body;
    const newQuestion = {
        content: question,
        yes: 0,
        no: 0,
        id: questionList.length,
    };

    questionList.push(newQuestion);
    fs.writeFileSync("./questionList.json", JSON.stringify(questionList));
    res.send("Success");
});


app.listen(6969, function(err) {
    if(err) console.log(err)
    else console.log("Server start success!");
})