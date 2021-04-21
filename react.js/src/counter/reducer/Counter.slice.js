import { createSlice } from '@reduxjs/toolkit'

const CounterSlice = createSlice({
    name : 'counterSlice',
    initialState : { number : 0 },
    reducer : {
        increase(state, action) {
            console.log('increase :: ' + JSON.stringify(state.number))
            return { number : state.number + action.payload }},
        decrease(state, action) {
            console.log('decrease :: ' +JSON.stringify(state.number))
            return { number : state.number - action.payload}}
    }
})

const { actions, reducer } = CounterSlice
export const { increase, decrease } = actions
export default reducer