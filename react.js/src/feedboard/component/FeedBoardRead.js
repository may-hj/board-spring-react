import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const FeedBoardRead = () => {
    const [detail, setDetail ] = useState({})

    const deleteOne = () => {
        alert('Delete?')
        axios
            .delete(`http://localhost:8080/feeds/${localStorage.getItem('select')}`)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err))
    }

    const fetchOne = () => {
        axios
            .get(`http://localhost:8080/feeds/${localStorage.getItem('select')}`)
            .then((res) => {
                console.log(res)
                setDetail(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchOne()
    }, [])

    return(<>
    <form>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Title</th>
                        <th>Writer</th>
                        <th>Content</th>
                        <th>Location</th>
                        <th>#</th>
                        <th>Date</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={detail.feedNo}>
                        <td>{detail.feedNo}</td>
                        <td>{detail.title}</td>
                        <td>{detail.writer}</td>
                        <td>{detail.content}</td>
                        <td>{detail.location}</td>
                        <td>{detail.hashtag}</td>
                        <td>{detail.regDate}</td>
                    </tr>
                </tbody>
            </table>

            <Link to={'/FeedBoardUpdate/${detail.feedNo}'}>
                <button>Modify</button>
            </Link>
            <Link to={'/FeedBoardList'}>
                <button onClick={deleteOne}>delete</button>
            </Link>
            <Link to={'/FeedBoardList'}>
                <button>List</button>
            </Link>

        </div>
    </form>
    </>)
}

export default FeedBoardRead