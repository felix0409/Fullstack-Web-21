const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const UsersSChema= new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String},
    name: { type: String}
}, {
	timestamps: true // createdAt & updatedAt
});

const UserModel = model("users", UsersSChema);

module.exports = UserModel;

