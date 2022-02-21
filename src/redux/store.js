import { combineReducers, createStore } from "redux";
import allProductsReducer from "./reducers/allProductsReducer";
import productReducer from "./reducers/productReducer";
import cartProductsReducer from './reducers/cartProductsReducer'
const allReducer=combineReducers({
    allProductsReducer,
    productReducer,
    cartProductsReducer
})

export const store=createStore(allReducer)