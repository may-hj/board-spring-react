import { createSlice } from '@reduxjs/toolkit'
import { Satellite } from '@material-ui/icons' 
import uuid from 'uuid/v4'

const initialState = [
    { id: 1, text: 'Study React', done: true },
    { id: 2, text: 'Study Redux', done: true },
    { id: 3, text: 'Study Thunk', done: false }
]
// funtion : addTodo, todos, findTodo, deditTodo, delTodo
const todoSlice = createSlice({
    name : 'todos',
    initialState,
    reducers : {
        addTodo(state, {payload}){ state.push({id: uuid(), text: payload, done: false}) },
        delTodo(state, {payload}){ 
            state.splice(state.findIndex(j => j.id === payload), 1)
            // return state.filter((todo) => todo.id !== payload)
            // return state.filter((del) => del.id !== payload)
            // 주석처리한 방식도 유효한 코드이다.
        },
        delTodos(state,{ payload }) {
            state.splice(payload)
        },
        toggleTodo(state, {payload}) {
            const toggle = state.find((todo) => todo.id === payload)
            toggle.done = !toggle.done
        }

    }
})

/**
action {type}
flux action {payload}
slice {
        "name":"todos",
        "actions":{},
        "caseReducers":{}
      }
 */

const { actions, reducer } = todoSlice
export const { addTodo, delTodo, delTodos, toggleTodo } = actions
export default reducer    