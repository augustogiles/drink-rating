import React from 'react'

import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import { Creators as CreatorsDrinks } from '../../store/ducks/drinks'
import { Content } from '../../components/Content/styles'
import Item from '../../components/ItemDescription'


class Drink extends React.Component {
    state = {
        drinkId: -1,
        comments: [],
        drink: {},
    }

    componentDidUpdate(prevProps) {
        const { sDrinks } = this.props
        const { drink, comments } = sDrinks
        console.log(sDrinks)

        // Check if current props aren't the same of previous
        drink &&
            prevProps.sDrinks !== sDrinks &&
            this.setState({
                drink, comments
            })

    }

    componentWillUnmount() {
        const { resetData } = this.props
        resetData()
    }

    componentDidMount() {
        const { getDrink, getDrinkRatings, drinkId } = this.props
        getDrink(drinkId);
        getDrinkRatings(drinkId);
    }

    render() {
        const { drink, comments, drinkId } = this.state
        return (
            <Content>
                {drink.name && <Item key={drinkId} wine={drink} comments={comments} onChangeAmount={this.handleAmount} />}
            </Content>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    console.log(state)
    return ({
        drinkId: id,
        sDrink: state.drink,
        sRatings: state.ratings,
        sDrinks: state.drinks,
    });
}

const mapDispatchToProps = dispatch => bindActionCreators(CreatorsDrinks, dispatch)

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(Drink)