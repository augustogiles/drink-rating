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

        yield put({ type: Types.GET_DRINK['GET']['SUCCESS'], payload })
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
        name: "F Negroamaro 2016",
        winery: "Cantine San Marzano",
        amount: 24.9,
        description: "Southern Italy is the toe, heel, and ankle of the Italian “boot” where we find the regions Campania, Basilicata, Puglia, Calabria, and Sicily as well as the distant relative Sardegna. There are scores of fascinating indigenous grape varieties here, different winemaking traditions and styles are defining each region, and the wines are often less expensive than their Northern counterparts.\n\nPuglia and Sicily are producing huge volumes of wine, and they are battling to be the second biggest wine producing region in Italy. The hot climate is reflected in the wines and they are famous for their inexpensive, full bodied, warm, and fruit forward red wines based on Primitivo and Nero d’Avola. Less famous yet very interesting are the Sicilian wines from Mount Etna. The higher altitude yields wines that are lighter, fresh and complex. The indigenous grape Nerello Mascalese offers some fine examples.\n\nIn Campania and the northern part of Basilicata, winemakers have been finding success with the grape Aglianico (pronounced “ahl-YAH-nee-koe”). The slightly colder climate is ideal for this grape and produces wines that are garnet-colored with high tannins and acidity. Harsh when young, but after some aging they become elegant and complex, and reveal lovely plummy flavors with a hint of chocolate.\n\nIn Sardegna they lean more towards the grapes Carignano and Cannonau with French/Spanish origin. The wines here are often powerful with a spicy touch.",
        origin: "Italy",
        region: "Salento",
        ratings_average: 4.3,
        ratings_count: 255,
        type: "red",
        src: require("./../../assets/wineBottles/negroamaro.png")
    },
    {
        name: "Luzzana Isola dei Nuraghi 2016",
        winery: "Vinicola Cherchi",
        amount: 21.47,
        description: "Southern Italy is the toe, heel, and ankle of the Italian “boot” where we find the regions Campania, Basilicata, Puglia, Calabria, and Sicily as well as the distant relative Sardegna. There are scores of fascinating indigenous grape varieties here, different winemaking traditions and styles are defining each region, and the wines are often less expensive than their Northern counterparts.\n\nPuglia and Sicily are producing huge volumes of wine, and they are battling to be the second biggest wine producing region in Italy. The hot climate is reflected in the wines and they are famous for their inexpensive, full bodied, warm, and fruit forward red wines based on Primitivo and Nero d’Avola. Less famous yet very interesting are the Sicilian wines from Mount Etna. The higher altitude yields wines that are lighter, fresh and complex. The indigenous grape Nerello Mascalese offers some fine examples.\n\nIn Campania and the northern part of Basilicata, winemakers have been finding success with the grape Aglianico (pronounced “ahl-YAH-nee-koe”). The slightly colder climate is ideal for this grape and produces wines that are garnet-colored with high tannins and acidity. Harsh when young, but after some aging they become elegant and complex, and reveal lovely plummy flavors with a hint of chocolate.\n\nIn Sardegna they lean more towards the grapes Carignano and Cannonau with French/Spanish origin. The wines here are often powerful with a spicy touch.",
        origin: "Italy",
        region: "Isola dei Nuraghi",
        ratings_average: 4.0,
        ratings_count: 280,
        type: "red",
        src: require("./../../assets/wineBottles/luzzana-isola.png")
        
    },
    {
        name: "Vandalo 2009",
        winery: "Cocevola",
        amount: 18,
        description: "Southern Italy is the toe, heel, and ankle of the Italian “boot” where we find the regions Campania, Basilicata, Puglia, Calabria, and Sicily as well as the distant relative Sardegna. There are scores of fascinating indigenous grape varieties here, different winemaking traditions and styles are defining each region, and the wines are often less expensive than their Northern counterparts.\n\nPuglia and Sicily are producing huge volumes of wine, and they are battling to be the second biggest wine producing region in Italy. The hot climate is reflected in the wines and they are famous for their inexpensive, full bodied, warm, and fruit forward red wines based on Primitivo and Nero d’Avola. Less famous yet very interesting are the Sicilian wines from Mount Etna. The higher altitude yields wines that are lighter, fresh and complex. The indigenous grape Nerello Mascalese offers some fine examples.\n\nIn Campania and the northern part of Basilicata, winemakers have been finding success with the grape Aglianico (pronounced “ahl-YAH-nee-koe”). The slightly colder climate is ideal for this grape and produces wines that are garnet-colored with high tannins and acidity. Harsh when young, but after some aging they become elegant and complex, and reveal lovely plummy flavors with a hint of chocolate.\n\nIn Sardegna they lean more towards the grapes Carignano and Cannonau with French/Spanish origin. The wines here are often powerful with a spicy touch.",
        origin: "Italy",
        region: "Puglia",
        ratings_average: 4.2,
        ratings_count: 28,
        type: "red",
        src: require("./../../assets/wineBottles/vandalo.jpg")
        
    },{
        name: "Lamùri Nero d'Avola Regaleali 2015",
        winery: "Tasca d'Almerita",
        amount: 8.5,
        description: "Southern Italy is the toe, heel, and ankle of the Italian “boot” where we find the regions Campania, Basilicata, Puglia, Calabria, and Sicily as well as the distant relative Sardegna. There are scores of fascinating indigenous grape varieties here, different winemaking traditions and styles are defining each region, and the wines are often less expensive than their Northern counterparts.\n\nPuglia and Sicily are producing huge volumes of wine, and they are battling to be the second biggest wine producing region in Italy. The hot climate is reflected in the wines and they are famous for their inexpensive, full bodied, warm, and fruit forward red wines based on Primitivo and Nero d’Avola. Less famous yet very interesting are the Sicilian wines from Mount Etna. The higher altitude yields wines that are lighter, fresh and complex. The indigenous grape Nerello Mascalese offers some fine examples.\n\nIn Campania and the northern part of Basilicata, winemakers have been finding success with the grape Aglianico (pronounced “ahl-YAH-nee-koe”). The slightly colder climate is ideal for this grape and produces wines that are garnet-colored with high tannins and acidity. Harsh when young, but after some aging they become elegant and complex, and reveal lovely plummy flavors with a hint of chocolate.\n\nIn Sardegna they lean more towards the grapes Carignano and Cannonau with French/Spanish origin. The wines here are often powerful with a spicy touch.",
        origin: "Italy",
        region: "Terre Siciliane",
        ratings_average: 3.9,
        ratings_count: 3359,
        type: "red",
        src: require("./../../assets/wineBottles/lamuri.png")

    },
    {
        name: "Brut Premier Champagne N.V.",
        winery: "Louis Roederer",
        amount: 43.3,
        description: "While there are many sparkling wine regions around the globe, only Champagne from the Champagne appellation in France can be labeled as such. Champagne has long been the wine of choice to celebrate special occasions, and its reputation as a luxury beverage has been intact since the Romans established vineyards in Reims in the 5th century (that's a really long time ago). Sparkling Champagne wasn't discovered until the 16th century, by accident, by the Benedictine Monks. Early vintages of Champagne were dub…ic, and tends to be less expensive than vintage Champagne—this is because a vintage year is only declared when growing conditions are especially favorable. The convivial nature of Champagne is due in part to how it's made. Following primary fermentation and bottling, a secondary alcoholic fermentation is induced in the bottle, which is achieved by the addition of yeast and rock sugar. The bubbles we love so much are a natural byproduct of this magical secondary fermentation, in the form of carbon dioxide.",
        origin: "France",
        region: "Champagne Premier Cru",
        ratings_average: 4.2,
        ratings_count: 32083,
        type: "sparkling",
        src: require("./../../assets/wineBottles/louis-roederer.png")
        
    },
    {
        name: "Viña Esmeralda N.V.",
        winery: "Torres",
        amount: 7.9,
        description: "",
        origin: "Spain",
        region: "Catalunya",
        ratings_average: 4.3,
        ratings_count: 24182,
        type: "white",
        src: require("./../../assets/wineBottles/vina-esmeralda.png")
        
    },
    {
        name: "The Original Rose",
        winery: "Mateus",
        amount: 3.8,
        description: "Mateus Rosé Original is a rosé with a very appealing and bright hue. On the whole, it is a fresh and seductive wine with fine and intense bouquet and all the joviality of young wines. In the mouth, it is a well balanced and tempting wine, brilliantly complemented by a soft and slightly fizzy finish.",
        origin: "Portugal",
        region: "Douro",
        ratings_average: 3.5,
        ratings_count: 21805,
        type: "rose",
        src: require("./../../assets/wineBottles/the-original.png")
        
    },
    {
        name: "Late Bottled Vintage Port N.V.",
        winery: "W. & J. Graham's",
        amount: 19.9,
        description: "It has a deep almost opaque colour, with an intense dark red rim. Elegant aromas of red fruit and eucalyptus, combined with freshly picked mint and notes of the distinctive Douro Rockrose (Gum Cistus). Rich red fruit flavours balanced by taut, peppery tannins. There is a fine backbone of schist minerality and balanced acidity, with a long and satisfying finish.",
        origin: "Italy",
        region: "Salento",
        ratings_average: 4,
        ratings_count: 11550,
        type: "fortified",
        src: require("./../../assets/wineBottles/grahams.png")
        
    },
    {
        name: "Douro Tinto N.V.",
        winery: "Casal Garcia",
        amount: 7.33,
        description: "It has young color, fairly deep with a beautiful ruby rim. On the nose, it is intense, young and fruity, with some floral hints from the Touriga Nacional. On the palate it’s fresh, round and delicate. The finish is smooth and offers a fruity mouth feel.",
        origin: "Portugal",
        region: "Douro",
        ratings_average: 3.5,
        ratings_count: 19082,
        type: "red",
        src: require("../../assets/wineBottles/casal-garcia.png")
        
    }
]

const ratings = [
    {
        id: 13386201,
        rating: 5.0,
        note: "Fruity, red, semi-dry",
        alias: "Reginaldo Ornaghi"
    },
    {
        id: 96773616,
        rating: 3.0,
        note: "Sweet earthy aroma with hints of oak. Slightly acidic and not as rich as the nose sugests.",
        alias: "Guy Romach"
    },
    {
        id: 74294542,
        rating: 3.0,
        note: "Fresh, sweet, easy drink",
        alias: "Agostinha Marques"
    },
    {
        id: 16865308,
        rating: 3.0,
        note: "Not a lot to remember.",
        alias: "Pedro Miguel Neto"
    },
    {
        id: 7481824,
        rating: 3.0,
        note: "Better than a €4 bottle really has a right to be.",
        alias: "Dberger"
    },
    {
        id: 2696645,
        rating: 4.0,
        note: "Had w mum dad and Alex May 2013 mothers day weekend w Stilton \u0026 crackers. Would be great w seafood or pork chops",
        alias: "Windsor42"
    },
    {
        id: 14790861,
        rating: 4.0,
        note: "Decent cheap dry rose",
        alias: "John Morrison"
    },
    {
        id: 123933592,
        rating: 3.0,
        note: "Slightly earthy aroma. Mouth feel is light in the beginning, overally pretty mild, aftertaste a bit better, quite dry. ",
        alias: "Kalle R"
    },
    {
        id: 127853335,
        rating: 3.5,
        note: "Fruity and smooth. ",
        alias: "Nichol Bamuza"
    },
    {
        id: 129348651,
        rating: 4.0,
        note: "Great VFM for this wine. One of our BBQ favs for a simple, easy drinking wine for steaks.",
        alias: "Daniel Sela"
    },
    {
        id: 18042078,
        rating: 4.0,
        note: "Very soft. Perfect for summer time.",
        alias: ";) Anna Psk"
    },
    {
        id: 101647506,
        rating: 3.0,
        note: "very nice for the price.\ndeep in color.\nintense nose of ripe black fruits and berries.\nrich in the palate with nice acidity and soft tannins. \nnot so sophisticated, but very enjoyable.",
        alias: "Yurie Taburceanu"
    }
]

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.RESET_DRINKS['SUCCESS']:
            return INITIAL_STATE
        case Types.GET_DRINKS['GET']['SUCCESS']:
            return { ...state, drinks: action.payload }
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
