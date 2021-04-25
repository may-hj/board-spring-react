import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const AddTodo = ({addTodo}) => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    
    const addTask = (value) => {
        dispatch(addTodo(value))
        const taskInput = document.getElementById("new-task")
        taskInput.value = ""    
    }

    const onSubmit = (e) => {
        e.preventDefault()
        addTask(input)
    }

    return(<>
        <p>
            <form onSumit={ onSubmit }>
                <label htmlFor="new-task">Add_Todo</label>
                <input 
                    id="new-task" 
                    type="text" style={{width:500}} 
                    onChange={ (e) => setInput(e.target.value) }
                />
                <button 
                    type={"submit"}
                    style={{width:100, backgroundColor:'mediumpurple'}}>
                    Add
                </button>
            </form>
        </p>
    </>)
}

export default AddTodo