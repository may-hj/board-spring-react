import React, { useEffect, useState } from 'react'
import { Button } from 'bootstrap' 
import { useSelector } from  'react-redux'
import { Navbar } from 'common/index'

import 'counter/style/counter.css'

const Counter = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{setCount(0)},[])
    return (<>
    <Navbar/>
    <h1 style={{ color : 'black'}}>카운터</h1>
    <div>
        <div>
            <button className="btn_bgcolor" aria-label="+" onClick={()=>{setCount(count + 1)}}>
                +
            </button>
            <span className="big_font" >{count}</span>
            <button className="btn_bgcolor" aria-label="-" onClick={()=>{setCount(count - 1)}}>
                -
            </button>
        </div>
    </div>
    </>)
}

export default Counter