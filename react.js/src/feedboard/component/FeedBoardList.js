import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const FeedBoardList = () => {
    const [fds, setFds ] = useState([])

    const fetchList = () => {
        axios
            .get('http://localhost:8080/feeds/list')
            .then((res) => {
                console.log(res)
                setFds(res.data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        console.log('randering...')
        fetchList()
    }, [])

    return(<>
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
                {fds.map((fds) => {
                    return(
                        <tr key={fds.feedNo}>
                            <td>{tds.feedNo}</td>
                            <td>{tds.title}</td>
                            <td>{tds.writer}</td>
                            <td>{tds.content}</td>
                            <td>{tds.location}</td>
                            <td>{tds.hashtag}</td>
                            <td>{tds.regDate}</td>
                            <td>
                                <Link to={'/FeedBoardRead/${fds.feedNo}'} className="linkto-fds">
                                    <button
                                        onClick={() => {
                                            localStorage.setItem('select', '${fds.feedNo}')
                                        }}>
                                        view details
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>)
}

export default FeedBoardList