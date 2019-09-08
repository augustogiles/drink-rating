import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { spawn } from 'redux-saga/effects'
import { routerMiddleware } from 'connected-react-router'

import createRootReducer from './ducks'
import { root as rootHome } from './ducks/drinks'

export const history = createBrowserHistory()
    const sagaMiddleware = createSagaMiddleware()
    const routersMiddleware = routerMiddleware(history)
    const middlewares = [sagaMiddleware, routersMiddleware]

    const composer = compose(applyMiddleware(...middlewares))

        
const store = createStore(createRootReducer(history), composer)

function* root() {
    yield spawn(rootHome)
}

sagaMiddleware.run(root)
export default store
