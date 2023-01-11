const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
    UserName: {
	type: String,
	required: true,
    },
    TodoSubject: {
	type: String,
    },
    TodoDescription: {
	type: String,
    },
    TodoStatus: {
	type: String,
	default: "New",
    },
    TodoCreateDate: {
	type: Date,
    },
    TodoUpdateDate: {
	type: Date,
    },
}, {versionKey: false});

const todoModel = mongoose.model("todo", todoSchema);
module.exports = todoModel;