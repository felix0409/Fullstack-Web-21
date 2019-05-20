const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const posts = new Schema({
    author: { type: Schema.Types.ObjectId,ref: 'users'},//ref: chung to author lien ket voi bang users
    post: { type: String },
    view: { type: Number, default: 0},
    title: { type: String,required: true},
    like: { type: Number, default: 0},
    image: { type: String,required: true}
}, {
	timestamps: true // createdAt & updatedAt
});

const PostModel = model("posts", posts);

module.exports = PostModel;