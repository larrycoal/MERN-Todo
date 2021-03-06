import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodo, updateItem } from "../../Store/actions/todoList";
import {Link} from 'react-router-dom'
class AddItem extends Component {
  state = {
    name: "",
    date: "",
    list: [],
    itemName:""
  };
  componentDidMount() {
    this.props.dispatch(fetchTodo(this.props.match.params.id)).then(() => {
      const { items,name } = this.props.todoList.todoItem;
      this.setState({
        ...this.state,
        list: items,
        itemName:name
      });
    });
  }
  handleAddItem(e) {
    let newItem = e.target.value;
    let newDate = new Date().toLocaleDateString();
    this.setState({
      name: newItem,
      date: newDate,
    });
  }
  handleSubmitItem(e) {
    e.preventDefault();
    const { list } = this.state;
    let newTask = {
      name: this.state.name,
      date: this.state.date,
    };
    let updatedTask = list;
    updatedTask.push(newTask);
    this.props
      .dispatch(updateItem(updatedTask, this.props.match.params.id))
      .then(() => {
        this.setState({
          ...this.state,
          name: "",
          date: "",
        });
      });
  }
  showItem() {
    const { list,itemName } = this.state;
    console.log(list)
    return list.length < 1? (
      <div className="emptyItem">ADD ITEM TO {itemName}</div>
    ) : (
      <ul className="listItem_wrapper">
        {
          list.map((list)=>(
            <li className="list_item">
              <span>{list.name}</span>
              <span>created on {list.date}</span>
            </li>
          ))
        }
        <Link className="exit" to="/">Exit</Link>
        </ul>
    );
  }

  render() {
    return (
      <div className="todoItem_wrapper">
        <form>
          <input
            type="text"
            value={this.state.name}
            placeholder="Add Item"
            onChange={(e) => this.handleAddItem(e)}
          />
          <button onClick={(e) => this.handleSubmitItem(e)}>
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </form>
        {this.showItem()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(AddItem);
