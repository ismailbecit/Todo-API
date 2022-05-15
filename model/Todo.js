const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TodoSchema = new Schema({
    title: { type: String, required: true },
    date: { type: Date, default: Date.now },
    isComplate: { type: Boolean, default: false }
})
const Todo = mongoose.model("Todo", TodoSchema)
module.exports = Todo