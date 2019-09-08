import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import drinks from './drinks'

export default history =>
    combineReducers({
        drinks,
        router: connectRouter(history),
    })
