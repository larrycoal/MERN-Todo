import { CREATE_TODO,FETCH_TODOS,FETCH_TODO,UPDATE_TODO,UPDATE_PRIORITY,DELETE_TODO } from "../actions/types";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_TODO:
      return{
        ...state,
      }
      case FETCH_TODOS:
        return {
          ...state,
          todo:action.payload
        }
        case FETCH_TODO:
        return {
          ...state,
          todoItem:{...action.payload}
        }
        case UPDATE_TODO:
        return {
          ...state,
          todoItem:action.payload
        }
        case UPDATE_PRIORITY:
          return {
            ...state,
            todoPriority:action.payload
          }
          case DELETE_TODO:
            return {
              ...state,
              delete:action.payload
            }
    default:
      return state;
  }
};

export default todoReducer;
