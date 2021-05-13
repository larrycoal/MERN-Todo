require("dotenv").config();
const express = require("express");
const bodyPaser = require("body-parser");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE);
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyPaser.urlencoded({ extended: true }));
app.use(bodyPaser.json());
//=======================
//-----> models
//=======================
const { Todo } = require("./TodoModel");

//MIDDLEWARES

app.post("/api/todo", (req, res) => {
  const todo = new Todo(req.body);
  todo.save((err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    }
    res.status(200).json({
      success: true,
      doc,
    });
  });
});
app.get("/api/fetchtodos", (req, res) => {
    Todo.find({},).sort({"priority":-1}).exec((err,data)=>{
        if (err) {
            return res.json({ success: false, err });
          }
          res.status(200).json({
            success: true,
            data,
          });
    })
})
app.get("/api/fetchtodo", (req, res) => {
    let id = req.query.id
    Todo.findById(id,(err,doc)=>{
        if (err) {
            return res.json({ success: false, err });
          }
          res.status(200).json({
            success: true,
            doc,
          });
    })
})
app.post("/api/updatetodo",(req,res)=>{
    let id = req.query.id
    let update =req.body
    Todo.findOneAndUpdate({_id:id},{items:update},(err,doc)=>{
        if(err){
            return res.json({success: false, err })
        }
        res.status(200).json({
            success:true,
            doc
        })
    })
})
app.post("/api/updatepriority",(req,res)=>{
    let id = req.query.id
    let priority =req.query.priority
    Todo.findOneAndUpdate({_id:id},{priority:priority},(err)=>{
        if(err){
            return res.json({success: false, err })
        }
        res.status(200).json({
            success:true,
        })
    })
})
app.post("/api/deleteTodo",(req,res)=>{
    let id = req.query.id
    Todo.findOneAndDelete({_id:id},(err)=>{
        if(err){
            return res.json({success: false, err })
        }
        res.status(200).json({
            success:true,
        })
    })
})
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
