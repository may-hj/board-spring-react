import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Todos, AddTodo } from 'todos/index'
import { Navbar, Footer } from 'common/index'
import { addTodo, delTodo, delTodos, toggleTodo } from 'todos/reducer/Todo.reducer'

import 'todos/style/Todo.css'

const TodoApp = () => {

    const todos = useSelector(state => (state.todos))

    return(<>
        <div>
            <Navbar/>
            <div style={{ marginTop:100 }}>
                <AddTodo addTodo={ addTodo }/>
                    <Todos 
                        todos={ todos }
                        delTodo={delTodo}
                        delTodos={delTodos}
                        toggleTodo={toggleTodo}
                    />    
            </div>
            <Footer/>
        </div>
    </>)
}

export default TodoApp