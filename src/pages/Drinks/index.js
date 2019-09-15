import React from 'react'

import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import { Creators as CreatorsDrinks } from '../../store/ducks/drinks'
import { Content } from '../../components/Content/styles'
import Item from '../../components/Item'


class Drinks extends React.Component {
    state = {
        drinks: [],
        sDrinks: []
    }

    componentDidMount(){
        console.log(this.props.getDrinks())
    }

    componentDidUpdate(prevProps) {
        prevProps.sDrinks !== this.props.sDrinks && this.handleUpdateDrinks()
    }

    handleUpdateDrinks = () => {
        const { sDrinks } = this.props
        const { drinks } = sDrinks
        this.setState({ sDrinks, drinks })
    }

    handleDetails = (id) => {
        console.log('click', id)
    }

    render(){
        const {drinks} = this.state
        console.log(drinks.length)
        return (
            <Content>
                {drinks.map((drink, i) => <Item key={i} wine={drink} index={i} onClickForDetails={this.handleDetails} />)}
            </Content>
        )
    }
}

const mapStateToProps = state => ({
    sDrinks: state.drinks,
})

const mapDispatchToProps = dispatch => bindActionCreators(CreatorsDrinks, dispatch)

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(Drinks)