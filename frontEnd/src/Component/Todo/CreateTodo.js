import React, { Component } from 'react';
import { connect } from "react-redux";
import { createTodo,fetchTodos } from "../../Store/actions/todoList";
import Todo from './Todos'

class CreateTodo extends Component {
  state = {
    name:"",
    items:[],
    priority:0,
  }
 error = false

componentDidMount(){
  this.props.dispatch(fetchTodos())
}
  handleChange(e){
  this.setState({
    ...this.state,
    name:e.target.value,
  })

  }
  handleTodo(e){
    e.preventDefault();
    if( this.state.name === ""){
      this.error=true
    }else{
      this.props.dispatch(createTodo(this.state)).then(()=>{
        this.props.dispatch(fetchTodos())
      })
      this.setState({
        ...this.state,
        name:""
      })  
    }
  }
  render() {
    return (
      <div className="create-todo-wrapper">
      <h2>Your Todo List</h2>
      <Todo list={this.props.todoList}/>
      <form>
        <input
          type="text"
          name="todoList"
          value={this.state.name}
          onChange={(e) => this.handleChange(e)}
          placeholder="Name of Todo"
          required
        />
        <button onClick={(e) => this.handleTodo(e)}>Add</button>
      </form>
      {this.error?<span className="error">Todo can not be blank</span>:""}
    </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todoList : state.todoList
  }
};
export default connect(mapStateToProps)(CreateTodo);
