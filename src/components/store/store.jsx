import {configureStore} from '@reduxjs/toolkit'
import { setCount } from './reducer/counter' 
import { setCArd } from './reducer/user'


const store = configureStore({
    reducer : {
        counDAta : setCount,
        countCArd : setCArd
    }
})

export {store}