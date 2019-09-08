import { put, takeLatest } from 'redux-saga/effects'
// import api from '../../services/api'

import { createRequestTypes, createTypes } from './../../utils'

export const Types = {
    RESET_DRINKS: createTypes('home/RESET_DATA'),
    GET_DRINKS: createRequestTypes('home/GET_DRINKS'),
    GET_DRINK: createRequestTypes('home/GET_DRINK'),
    DO_RATE: createRequestTypes('home/DO_RATE'),
}

export const Creators = {
    resetData: () => ({ type: Types.RESET_DRINKS['SUCCESS'] }),
    getDrinks: () => ({ type: Types.GET_DRINKS['GET']['REQUEST'] }),
    getDrink: () => ({ type: Types.GET_DRINK['GET']['REQUEST'] }),
    doRate: data => ({ type: Types.DO_RATE['POST']['REQUEST'], data }),
}

export function* root() {
    yield takeLatest(Types.GET_DRINKS['GET']['REQUEST'], asyncGetDrinks)
    yield takeLatest(Types.GET_DRINK['GET']['REQUEST'], asyncGetDrink)
    yield takeLatest(Types.DO_RATE['POST']['REQUEST'], asynDoRate)
}

function* asyncGetDrinks() {
    try {
        //TODO: BACKEND REQUEST
        // const { data } = yield call(api.get, 'cardsHomePrices')
        console.log("ToDo: implement API call in  store/ducks/home.js file")
        const payload = yield drinks

        yield put({ type: Types.GET_DRINKS['GET']['SUCCESS'], payload })
    } catch (err) {
        yield put({
            type: Types.GET_DRINKS['GET']['ERROR'],
            error: { code: 500, message: 'Erro ao resgatar os preços' },

            // TODO: BACKEND CONNECTION RESPONSE
            // error: { code: err.response.data.result, message: err.response.data.message },
        })
    }
}

function* asyncGetDrink(action) {
    try {
        //TODO: BACKEND REQUEST
        // const { data } = yield call(api.get, 'cardsHomePrices')
        console.log("ToDo: implement API call in  store/ducks/home.js file")
        const payload = yield drinks

        yield put({ type: Types.GET_CARDS_DATA['GET']['SUCCESS'], payload })
    } catch (err) {
        yield put({
            type: Types.INVOICES['GET']['ERROR'],
            error: { code: 500, message: 'Erro ao resgatar os preços' },

            // TODO: BACKEND CONNECTION RESPONSE
            // error: { code: err.response.data.result, message: err.response.data.message },
        })
    }
}

function* asynDoRate(action) {
    try {
        // const amount = action.amount
        // TODO: BACKEND REQUEST
        // API(POST)
        // const { data } = yield call(api.post, 'amount', amount)
        
        yield put({
            type: Types.ADD_ENTITY['POST']['SUCCESS'],
            payload: {},
            // payload: data.payload,
        })
        
    } catch (err) {
        yield put({
            type: Types.ADD_ENTITY['POST']['ERROR'],
            error: { code: 500, message: 'Erro ao comprar serviço' },
            // TODO: BACKEND CONNECTION RESPONSE
            // error: { code: err.response.data.result, message: err.response.data.message },
        })
    }
}

const INITIAL_STATE = {
    error: {},
    drinks:[],
}

const drinks = [
    {
        count: 0,
        title: 'Basic',
        amount: 0,
        googlPrice: 24.30,
        safePrice: 20.00,
    },
    {
        count: 0,
        title: 'Business',
        amount: 0,
        googlPrice: 45.90,
        safePrice: 40.00,
    },
    {
        count: 0,
        title: 'Enterprise',
        amount: 0,
        googlPrice: 112,
        safePrice: 110,
    }
]

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.RESET_DRINKS['SUCCESS']:
            return INITIAL_STATE
        case Types.GET_DRINKS['GET']['SUCCESS']:
            return { ...state, cards: action.payload }
        case Types.GET_DRINKS['GET']['ERROR']:
            return { ...state }
        case Types.GET_DRINK['GET']['SUCCESS']:
            return { ...state }
        case Types.GET_DRINK['GET']['ERROR']:
            return { ...state }
        case Types.DO_RATE['POST']['SUCCES']:
            return { ...state }
        case Types.DO_RATE['POST']['ERROR']:
            return { ...state, error: action.payload }
        default:
            return state
    }
}
