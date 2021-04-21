import { configureStore} from '@reduxjs/toolkit'
import counterReducer from 'counter/service/Counter.service'

export default configureStore({
    reducer: {
        counter: counterReducer
    },
})