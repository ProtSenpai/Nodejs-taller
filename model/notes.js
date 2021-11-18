const { builtinModules } = require('module')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

let NoteSchema = Schema({
    tittle: {type: String, required: true, max: 50},
    comment: {type: String, required: true, max: 150},
    user: {type: String, required: true}
})

module.exports = mongoose.model("Note", NoteSchema) 