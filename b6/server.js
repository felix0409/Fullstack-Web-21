const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fs = require("fs");

const QuestionModel = require("./models/questionModel");

mongoose.connect("mongodb://localhost/databei",
    { useNewUrlParser: true }, // them cai nay vao de do~ loi~ :) 
    function(err) {
    if(err) console.log(err)
    else console.log("DB connect successfully!");

    // QuestionModel.create({
    //     content: "Hello",
    // }, function(err, docCreated) {
    //     if(err) console.log(err)
    //     else console.log("Created!");
    // });

    QuestionModel.find({}, function(err, docs) {
        if(err) console.log(err)
        else console.log("Question: ", docs);
    });
});

// data-typeL application;/x-ww-form-urencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
    
    // res.send(`
    //     <h1>${question.content}</h1>
    //         <div>
    //             <a href="/vote/${question.id}/no">
    //                 <button> Sai / Không / Trái</button>
    //             </a>
    //             <a href="/vote/${question.id}/yes">
    //                 <button> Đúng / Có / Phải</button>
    //             </a>    
    //         </div>

    //         <div>
    //             <a>
    //                 <button>Kết quả vote</button>
    //             </a>
    //             <a>
    //                 <button>Câu hỏi khác</button>
    //             </a>
    //         </div>
    // `)
    res.sendFile(__dirname + "/views/home.html");
});

// router api
app.get("/randomquestion", (req, res) => {
    // get random question
    const questionList = JSON.parse(fs.readFileSync("questionList.json", {encoding:"utf-8"})); //convert file json -> object
    const randomNumber = Math.floor(Math.random()*questionList.length); // random 0 -> length - 1
    const question = questionList[randomNumber];
    res.send(question);
});

app.get("/result", (req, res) => {
    res.sendFile(__dirname + "/views/result.html");
});


app.get("/vote/:questionId/:vote", (req, res) => {
    // const questionId = req.params.questionId;
    // const vote = req.params.vote;
    const { questionId, vote } = req.params;

    const questionList = JSON.parse(fs.readFileSync("questionList.json", {encoding:"utf-8"}));
    // 3 == "3" => true, check gia tri
    // 3 === "3" => false, check gia tri va type


    //vote == "yes" || "no"
    // questionList[i].yes || questionList[i]["yes"] ]] questionList[i]["no"] || questionList[i][vote] => 2 cach lay value

    // for (let i = 0; i < questionList.length; i++) {
    //     if (questionList[i].id == questionId) {
    //         if (vote == "yes") {
    //             questionList[i].yes++;
    //         } else questionList[i].no++;
    //     }
    // }

    questionList[questionId][vote]++;

    fs.writeFileSync("./questionList.json", JSON.stringify(questionList));
    res.redirect("/") // chuyen huong sang trang chu

})

// app.post('/questionListUpdate', function(req, res) {
//     const questionList = JSON.parse(fs.readFileSync("questionList.json", {encoding:"utf-8"}));
//     const randomNumber = Math.floor(Math.random()*questionList.length);
//     const question = questionList[randomNumber];

//     // const clickyes = document.getElementById('clickyes');
//     // const clickno = document.getElementById('clickno');

//     // if (clickyes.innerText === "yes") {
//     //     question.yes++;
//     //     console.log(questionList);
//     // } else if (clickno.innerText === "no") {
//     //     question.no--;
//     //     console.log(questionList);
//     // }

//     res.send("Voting successfully!");
// })

app.get('/ask', function(req, res) {
    res.sendFile(__dirname + "/views/ask.html") //dirname: duong dan tuyet doi
});

app.get('/question/:id', (req, res) => {
    res.sendFile(__dirname + "/views/question.html");
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