import React from 'react'
import { connect } from 'react-redux'

import Header from './components/Header'
import Routes from './routes'

class App extends React.Component {

    render(){
        return (
            <React.Fragment>
                <Header/>
                <Routes />
            </React.Fragment>
        )
    }

}

export default connect()(App)