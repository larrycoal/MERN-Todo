import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {updatePriority,fetchTodos,deleteTodo} from '../../Store/actions/todoList'


const Todo = (props) => {
  const { todo} = props.list;
 const handlePriority = (id,priority)=>{
   let newPriority = priority === 0 ? 1 : 0
   props.dispatch(updatePriority(id,newPriority)).then(()=>{
     props.dispatch(fetchTodos())
   })
 }

 const handleDelete = (id)=>{
   props.dispatch(deleteTodo(id)).then(()=>{
     props.dispatch(fetchTodos())
   })

 }
  const showTodoList = () => {
    console.log(todo)
   return !todo? <h1>EMPTY LIST</h1>:
    todo.map((todo, i) => (
      <div>
        <li key={i}>
          <Link to={"/additem/" + todo._id}>{todo.name}</Link>
          <span>
            <i
              class="fa fa-star"
              aria-hidden="true"
              style={{ color: `${todo.priority === 1 ? "yellow":"white"}` }}
              onClick={()=>handlePriority(todo._id,todo.priority)}
            ></i>
          </span>
          <span>
            <i 
            class="fa fa-trash" 
            aria-hidden="true"
            onClick={()=>handleDelete(todo._id)}
            ></i>
          </span>
        </li>
      </div>
    ));
  };

  return (
    <div className="todo-wrapper">
      <ul className="todoList">{showTodoList()}</ul>
    </div>
  );
};


export default connect()(Todo);
