import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Drinks from './pages/Drinks'
import Drink from './pages/Drink'


const Routes = () => {
    return (
        <React.Fragment>
            <React.Suspense fallback={<div>LOADING...</div>}>
                <Switch>
                    <Redirect from={'/drinkRating'} to={'/'} />
                    <Route path={'/drinks/:id'} component={Drink} />
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
