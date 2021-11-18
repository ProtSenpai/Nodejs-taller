const { builtinModules } = require('module')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

let UserSchema = Schema({
    name: {type: String, required: true, max: 50},
    userName: {type: String, required: true, min: 8},
    identification:{type: Number, required: true},
    password:{type: String, required:true},
    photo:{type:String, required:true},
    active:{type:Boolean, required:true}
})

module.exports = mongoose.model("User", UserSchema) 