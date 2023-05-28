import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [],
}
const initialCartState = {
    cartItems: [],
};
const initialCategoryState = {
    selectedCategory: '',
}

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
            var arr = [...state.cartItems];
            var found = false;
            //checking if product is already in the cart if it is the set found = true
            state.cartItems.forEach((item, index) => {
                if(item.id === payload.id) {
                    arr[index] = {...payload, value: item.value+1};
                    found = true;
                }
            })
            // if the item is already in cartItems array just update the cartItem with incremented value count otherwise add product in the cart with value=1 by default
            return found? {...state, cartItems: arr} : {...state, cartItems: [...state.cartItems, {...payload, value: 1}]};
        case ActionTypes.REMOVE_FROM_CART:
            var arr = [];
            state.cartItems.forEach((item) => {
                if(item.id !== payload.id) {
                    arr.push(item);
                }
            })
            return {...state, cartItems: arr};
        case ActionTypes.DECREMENT_COUNT:
            var arr = [...state.cartItems];
            state.cartItems.forEach((item, index) => {
                if(item.id === payload.id) {
                    arr[index] = {...payload, value: item.value-1}
                }
            })
            return {...state, cartItems: arr};
        default:
            return state;
    }
}

export const categoryReducer = ( state = initialCategoryState, { type, payload } ) => {
    switch(type){
        case ActionTypes.SELECT_CATEGORY:
            return {...state, selectedCategory: payload}
        default:
            return state;
    }
}