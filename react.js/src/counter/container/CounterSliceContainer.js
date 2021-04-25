import React from 'react'
import { CounterSlice } from 'counter/index'
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease } from 'counter/reducer/Counter.slice'
import { Navbar, Footer } from 'common/index'

const CounterSliceContainer = () => {
    const dispatch = useDispatch()
    const number = useSelector( state => (state.CounterSlice.number) )
    
    return(<>
        <Navbar/>
        <CounterSlice number={ number }
        onIncrease={ () => dispatch(increase(1))}
        onDecrease={ () => dispatch(decrease(1))}/>
        <Footer/>
    </>)
}

export default CounterSliceContainer
