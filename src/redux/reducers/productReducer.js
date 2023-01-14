import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [],
}
const initialCartState = {
    cartItems: [],
};

export const productReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch(type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}

export const cartReducer = (state = initialCartState, {type, payload}) => {
    switch(type){
        case ActionTypes.ADD_TO_CART:
            var value = 0;
            state.cartItems.forEach((item, index) => {
                if(item.id === payload.id) {
                    value = item.value;
                    state.cartItems.splice(index, 1);
                }
            })
            return {...state, cartItems: [...state.cartItems, {...payload, value: value+1}]};
        case ActionTypes.REMOVE_FROM_CART:
            var arr = [];
            state.cartItems.forEach((item) => {
                if(item.id !== payload.id) {
                    arr.push(item);
                }
            })
            return {...state, cartItems: arr};
        case ActionTypes.DECREMENT_COUNT:
            var value = 0;
            state.cartItems.forEach((item, index) => {
                if(item.id === payload.id) {
                    value = item.value;
                    state.cartItems.splice(index, 1);
                }
            })
            return {...state, cartItems: [...state.cartItems, {...payload, value: value-1}]};
        default:
            return state;
    }
}
