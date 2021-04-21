import React, { useEffect } from 'react'

const CounterSlice = React.memo(({ number, onIncrease, onDecrease }) => {

    return(<>
    <h1>슬라이스 카운터</h1>
    <div>
        <div>
            <button className="btn_bgcolor" aria-label="+" onClick={onIncrease}>
                +
            </button>
            <span className="big_font">{number}</span>
            <button className="btn_bgcolor" aria-label="+" onClick={onDecrease}>
                -
            </button>
        </div>
    </div>
    </>)
})

export default CounterSlice