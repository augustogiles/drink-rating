import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Drinks from './pages/Drinks'

const Routes = () => {
    return (
        <React.Fragment>
            <React.Suspense fallback={<div>LOADING...</div>}>
                <Switch>
                    <Redirect from={'/drinks'} to={'/'} />
                    {/* <Route path={'/not-found'} component={PageNotFound} /> */}
                    <Route component={Drinks} />
                </Switch>
            </React.Suspense>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    sRouter: state.router,
})

export default connect(mapStateToProps)(Routes)
