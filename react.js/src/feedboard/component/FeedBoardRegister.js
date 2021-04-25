import React, { useCallback, useState } from 'react'
import axios from 'axios'

const FeedBoardRegister = () => {
    const [inputs, setInputs] = useState({
        title: ' ',
        writer: ' ',
        content: ' ',
        location: ' ',
        hashtag: ' ',
    })

    const { title, writer, content, location, hashtag } = inputs 

    const handleChange = useCallback(
        (e) => {
            const { value, name } = e.target
            setInputs({
                ...inputs,
                [name]: value,
            })
        },
        [inputs]
    )

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault()
            console.log('working')

            axios
                .post('http://localhost:8080/feeds/insert',{
                    title,
                    writer,
                    content,
                    location,
                    hashtag
                })
                .then((res) => {
                    console.log(res)
                    window.location = '/FeedBoardList'
                })
                .catch((err) => console.log(err))
        },
        [title, writer,content,location,hashtag]
    )

    return(<>
        <form onSubmit={ handleSubmit } method="get">
            <div className="registerForm">
                <h1>Regist</h1>
                <hr/>
                <label htmlFor="title">
                    <b>Title</b>
                </label>
                <input type="text" onChange={ handleChange } placeholder="Enter Title" name="title" id="title" required/>
                <label htmlFor="writer">
                    <b>Writer</b>
                </label>
                <input type="text" onChange={ handleChange } placeholder="Enter Writer" name="writer" id="writer" required/>
                <label htmlFor="content">
                    <b>Content</b>
                </label>
                <input type="text" onChange={ handleChange } placeholder="Enter content" name="content" id="content" required/>
                <label htmlFor="location">
                    <b>Location</b>
                </label>
                <input type="text" onChange={ handleChange } placeholder="Enter Location" name="location" id="location" required/>
                <label htmlFor="hashtag">
                    <b>Hashtag</b>
                </label>
                <input type="text" onChange={ handleChange } placeholder="Enter Hashtag" name="hashtag" id="hashtag" required/>
                <hr/>
                <button type="submit">Regist</button>
                <button>
                    <a href="/FeedBoardList">List</a>
                </button>
            </div>    
        </form>    
    </>)
}

export default FeedBoardRegister