import React from 'react'

import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import { Creators as CreatorsDrinks } from '../../store/ducks/drinks'


class Drinks extends React.Component {

    render(){
        return (
            <React.Fragment>
                ALO
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return (
{
    sCards: state.home,
})}

const mapDispatchToProps = dispatch => bindActionCreators(CreatorsDrinks, dispatch)

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(Drinks)