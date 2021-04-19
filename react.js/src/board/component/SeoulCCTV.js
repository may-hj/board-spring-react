import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Navbar,Footer } from 'common/index'

import 'article/style/AtricleList.css'


const SeoulCCTV = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get(`/data/SeoulCCTV.json`)
        .then(res => {
            setItems(res.data.DATA)
        })
        .catch(err => {})
    }, [])   

    return (<>
        <Navbar/>
        <h2>서울 CCTV</h2>
        <table>
            <tr>
                <th style={{width: '5%'}}>No.</th>
                <th style={{width: '15%'}}>기준날짜</th>
                <th style={{width: '15%'}}>카메라코드</th>
                <th style={{width: '30%'}}>카메라명칭</th>
                <th style={{width: '40%'}}>설명</th>
            </tr>
            { items.map((j, i)=>{
                return (<tr key={i}>
                    <td style={{width: '5%'}}>{i+1}</td>
                    <td style={{width: '15%'}}>{j.checktime}</td>
                    <td style={{width: '15%'}}>{j.deviceid}</td>
                    <td style={{width: '30%'}}>{j.devicename}</td>
                    <td style={{width: '40%'}}>{j.description}</td>
                </tr>)
                })
            }
        </table>
        <Footer/>
    </>)
}

export default SeoulCCTV