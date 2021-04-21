import React, { useCallback } from 'react'
import { ReduxCounter } from 'counter'
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease } from 'counter/reducer/Counter.reducer'
import { Navbar, Footer } from 'common/index'

const CounterContainer = () => {
    const number = useSelector(state => (state.counterReducer.number))
    
    const dispatch = useDispatch()
    const onIncrease = useCallback(()=> dispatch(increase()),[dispatch])
    const onDecrease = useCallback(()=> dispatch(decrease()),[dispatch])
    
    return (<>
        <Navbar/>
        <ReduxCounter number={ number } onIncrease={ onIncrease } onDecrease={ onDecrease }/>
        <Footer/>
    </>)
}

export default CounterContainer