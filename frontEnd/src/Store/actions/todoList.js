import {CREATE_TODO,FETCH_TODOS,FETCH_TODO,UPDATE_TODO,UPDATE_PRIORITY,DELETE_TODO} from './types'
import axios from 'axios'

export const createTodo = async (todo)=>{
    let response = await axios.post("/api/todo",(todo)).then((res)=>res.data)
    return {
        type:CREATE_TODO,
        payload:response.doc
    }
}
export const fetchTodos = async (todo)=>{
    let response = await axios.get("/api/fetchtodos").then((res)=>res.data)
    return {
        type:FETCH_TODOS,
        payload:response.data
    }
}
export const fetchTodo = async (id)=>{
    let response = await axios.get(`/api/fetchtodo/?id=${id}`).then((res)=>res.data)
    return {
        type:FETCH_TODO,
        payload:response.doc
    }
}
export const updateItem = async (item,id)=>{
    let response = await axios.post(`/api/updatetodo/?id=${id}`,(item)).then((res)=>res.data)
    return {
        type:UPDATE_TODO,
        payload:response
    }
}
export const updatePriority = async (id,priority)=>{
    console.log(priority)
    let response = await axios.post(`/api/updatepriority/?id=${id}&priority=${priority}`).then((res)=>res.data)
    return {
        type:UPDATE_PRIORITY,
        payload:response
    }
}
export const deleteTodo = async (id)=>{
    let response = await axios.post(`/api/deleteTodo/?id=${id}`).then((res)=>res.data)
    return {
        type:DELETE_TODO,
        payload:response
    }
}