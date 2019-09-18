import React from 'react'

import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import { Creators as CreatorsDrinks } from '../../store/ducks/drinks'
import { Content } from '../../components/Content/styles'
import Item from '../../components/Item'

import { SList } from './styles';

class Drinks extends React.Component {
    state = {
        drinks: [],
        sDrinks: []
    }

    componentDidMount(){
        this.props.getDrinks();
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
        const {history} = this.props
        console.log('click', id, history)
        history.push(`/drinks/${id}`)
    }

    render(){
        const {drinks} = this.state
        return (
            <SList className="item-wrapper">
                {drinks.map((drink, i) => <Item key={i} wine={drink} index={i} onClickForDetails={this.handleDetails} />)}
            </SList>
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