import React from 'react'
import { Navbar,Footer } from 'common/index'
import CCTV from 'board/data/CCTV.png'

import 'article/style/AtricleList.css'

const SeoulCCTV = () => {
    return (<>
        <Navbar/>
        <h2>서울 CCTV</h2>
        <table>
            <tr>
                <th>No.</th>
                <th>기준날짜</th>
                <th>카메라코드</th>
                <th>카메라명칭</th>
                <th>설명</th>
            
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
        <img src = {CCTV} className="CCTV" />
        <Footer/>
    </>)
}

export default SeoulCCTV