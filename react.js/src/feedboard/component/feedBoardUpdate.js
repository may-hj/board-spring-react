import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Select } from '@material-ui/core'

const FeedBoardUpdate = () => {
    const [detail, setDetail] = useState({})

    const { title, writer, content, location, hashtag } = detail
    const fetchOne = () => {
        alert('get info')
        alert(`${ localStorage.getItem('select')}`)

        axios
            .get(`http://localhost:8080/feeds/${localStorage.getItem('select')}`)
            .then((res) => {
                console.log(res)
                setDetail({
                    title: res.data.title,
                    writer: res.data.writer,
                    content: res.data.content,
                    location: res.data.location,
                    hashtag: res.data.hashgtag
                })
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchOne()
    }, [])

    const handleSubmit = useCallback(
        (e) => {
            alert('post info')
            alert(`${localStorage.getItem(Select)}`)

            e.preventDefault()
            console.log('update')
            axios
                .put(`http://localhost:8080/feeds/${localStorage.getItem('select')}`, {
                    title,
                    writer,
                    content,
                    loaction,
                    hashtag
                })
                .then((res) => {
                    console.log(res)
                    window.location = '/FeedBoardList'
                })
                .catch((err) => console.log(err))
        },
        [title, writer, content, location, hashtag]
    )

    const handleChange = useCallback(
        (e) => {
            const { value, name } = e.target
            setDetail({
                ...detail,
                [name]: value,
            })
        },
        [detail]
    )

    return(<>
        <h1>Modify Page</h1>
        <form onSubmit={ handleSubmit } method="post">
    <       label htmlFor="title">
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
            <input type="text" onChange={ handleChange } placeholder="Enter Hashtag" name="hashtag" id="hashtag"/>
            
            <button type="submit">Modify</button>
        </form>
        <Link to="/FeedBoardList">List</Link>
    </>)
}

export default FeedBoardUpdate