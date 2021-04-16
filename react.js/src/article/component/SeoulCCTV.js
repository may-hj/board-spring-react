import React from 'react'
import Navbar from 'common/component/Navbar'
import Footer from 'common/component/Footer'
import CCTV from 'article/data/CCTV.png'

import 'common/style/Common.css'

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
        <img src = {CCTV} className="CCTV" alt=""/>
        <Footer/>
    </>)
}

export default SeoulCCTV