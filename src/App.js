import React from 'react'
import { connect } from 'react-redux'

import Routes from './routes'

class App extends React.Component {

    render(){
        return (
            <React.Fragment>
                <Routes />
            </React.Fragment>
        )
    }

}

export default connect()(App)