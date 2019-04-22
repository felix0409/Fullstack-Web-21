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
    // cach 1
    // const questionList = JSON.parse(fs.readFileSync("questionList.json", {encoding:"utf-8"})); //convert file json -> object
    // const randomNumber = Math.floor(Math.random()*questionList.length); // random 0 -> length - 1
    // const question = questionList[randomNumber];

    
    // QuestionModel.find({}, function(err, docs) {
    //     if(err) console.log(err)
    //     else {
    //         const questionList = JSON.parse(docs); //convert file json -> object
    //         console.log(questionList.content);
    //     }
    // });
    // res.send(question);

    // QuestionModel.find({}, (err, docs) => {
    //     if(err) console.log(err)
    //     else {
    //         const randomIndex = Math.floor(Math.random()*docs.length); // random 0 -> length - 1
    //         const question = docs[randomIndex];
    //         res.json(question);
    //     }
    // })

    QuestionModel.countDocuments({}, (err, totalDoc) => {
        if (err) console.log(err)
        else {
            const randomIndex = Math.floor(Math.random()*totalDoc); // random 0 -> length - 1
            QuestionModel
                .findOne({})
                .skip(randomIndex)
                .exec((err, question) => {
                    if(err) console.log(err)
                    else res.json(question);
                });
        }
    });
});


app.get("/vote/:questionId/:vote", (req, res) => {
    // const questionId = req.params.questionId;
    // const vote = req.params.vote;
    const { questionId, vote } = req.params;
    if (vote == "yes") {
        QuestionModel
            .findById(questionId)
            .exec((err, data) => {
                if(err) console.log(err)
                else {
                    var yes = data.yes + 1;
                    data.save(function(err) {
                        if (err) console.log(err)
                        else {
                            QuestionModel.updateOne({_id: questionId}, {$set: {yes: yes}}, function(err, res) {
                                if(err) console.log(err);
                                else console.log("Update successfully...");
                            })
                        }
                    })
                    
                }
            });
    } else {
        QuestionModel
            .findById(questionId)
            .exec((err,data) => {
                if(err) console.log(err);
                else {
                    var no = data.no + 1;
                    data.save(function(err) {
                        if (err) console.log(err)
                        else {
                            QuestionModel.updateOne({_id: questionId}, {$set: {no: no}}, function(err, res) {
                                if(err) console.log(err);
                                else console.log(`${questionId} update ${vote}`);
                            })
                        }
                    })
                }
            });
    }
    // const questionList = JSON.parse(fs.readFileSync("questionList.json", {encoding:"utf-8"}));
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

    // questionList[questionId][vote]++;

    // fs.writeFileSync("./questionList.json", JSON.stringify(questionList));
    // res.redirect("/") // chuyen huong sang trang chu

    // const { questionid } = req.params;
    // const question = questionsList[id];
    res.redirect("/");
});


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

app.get('/getInfo/:id', (req, res) => {
    const { id } = req.params;
    QuestionModel.findById(id, function(err, docs) {
        if(err) console.log(err);
        else {
            res.send(docs);
        }
    });
})

app.post('/addquestion', function(req, res) {
    const { question } = req.body;

    QuestionModel.create({
        content: question,
    }, function(err, docCreated) {
        if(err) console.log(err)
        else res.send("Success");
    });
});


app.listen(6969, function(err) {
    if(err) console.log(err)
    else console.log("Server start success!");
})