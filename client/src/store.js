import {combineReducers} from 'redux'

import {createStore , applyMiddleware}  from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { getAllPizzaaReducer , addPizzaaReducer , getPizzaByIdReducer, editPizzaaReducer } from './reducers/pizzaReducers'
import { cartReducer } from './reducers/cartReducer'
import { getAllUsersReducer, loginUserReducer, registerUserReducer } from './reducers/userReducer'
import { placeOrderReducer , getUserOrdersReducer, getAllOrdersReducer} from './reducers/orderReducer'


const finalReducer = combineReducers({
    getAllPizzaaReducer : getAllPizzaaReducer,
    cartReducer : cartReducer,
    //cartItems : cartItems
    registerUserReducer : registerUserReducer,
    loginUserReducer : loginUserReducer,
    placeOrderReducer : placeOrderReducer,
    getUserOrdersReducer : getUserOrdersReducer,
    addPizzaaReducer : addPizzaaReducer,
    getPizzaByIdReducer : getPizzaByIdReducer,
    editPizzaaReducer : editPizzaaReducer,
    getAllOrdersReducer : getAllOrdersReducer ,
    getAllUsersReducer : getAllUsersReducer

})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser = localStorage.getItem('currentUser')?JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
    cartReducer :{
        cartItems : cartItems
    },
    loginUserReducer:{
        currentUser : currentUser
    }
}

const composeEnhancers = composeWithDevTools({})
const store = createStore(finalReducer , initialState , composeEnhancers(applyMiddleware(thunk)))

export default store