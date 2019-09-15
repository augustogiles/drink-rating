import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { GlobalStyles } from './styles/themes'


import store, { history } from './store'

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <GlobalStyles/>
            <App />
        </ConnectedRouter>
    </Provider>,

    document.querySelector('#root')
)