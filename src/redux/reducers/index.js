import { combineReducers } from "redux";
import { cartReducer, productReducer, selectedProductReducer, categoryReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cartItems: cartReducer,
    categoryReducer: categoryReducer,
})

export default reducers;