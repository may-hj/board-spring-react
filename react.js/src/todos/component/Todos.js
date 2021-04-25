import React from 'react'
import { Todo } from 'todos/index'
import { useDispatch } from 'react-redux'

const Todos = ({ todos, delTodo, delTodos, toggleTodo }) => {
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(delTodo(0))
    }

    return(<>
        <h3>TodoList</h3>
        <button 
            style={{width:200, backgroundColor:'#8a3fa9'}} 
            onClick={ onClick }>
            delete
        </button>
        <div>
            {todos.map(todo => (
            <Todo 
                key={ todo.id } 
                todo={ todo } 
                delTodo={ delTodo } 
                toggleTodo={toggleTodo}
            />))}
        </div>
        
    </>)
}

export default Todos