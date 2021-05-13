const mongoose = require('mongoose')
const todoSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:100
    },
    items:{
        type:Array,
        default:[]
    },
    priority:{
        type:Number,
        default:0
    },
})

const Todo = mongoose.model("Todo",todoSchema)

module.exports = {Todo}