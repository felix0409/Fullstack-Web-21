const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;



const QuestionSchema = new Schema({
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    content: { type: String, require: true }, // neu content la cau hoi, require true => bat buoc phai dien
}, {
    // _id: false;
    // versionKey: false;
    timestamps: true // createdAt & updateAt
});

const QuestionModel = model("Table", QuestionSchema);

module.exports = QuestionModel; // module.exports la cu phap cua nodejs, de? export ra ngoai thi dung dong` nay`.