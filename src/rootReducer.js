import data from './data.json';

const INITIAL_STATE = {
    cart: {},
    total: 0.0,
    products: data.products
}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //adds a product with key action.payload to the cart
        case 'CART_ADD':
            //if the payload is somehow not a valid key, just return the state as is
            if (action.payload in state.products) {
                //make a copy of the cart to manipulate
                const tempCart = { ...state.cart };
                //if the payload is already in the cart, add to the count, otherwise add it to the cart with a count of 1
                action.payload in tempCart
                    ? tempCart[action.payload] += 1
                    : tempCart[action.payload] = 1
                //rounds total to 2 decimal places to remove rounding errors with math
                const fixedPrice = (Number.parseFloat(state.total) + Number.parseFloat(state.products[action.payload].price)).toFixed(2);
                return { ...state, total: fixedPrice, cart: tempCart };
            }
            return state;
        case 'CART_REMOVE':
            //if the payload is not in the cart, just return the state as is
            if (action.payload in state.cart) {
                //make a copy of the cart to manipulate
                const tempCart = { ...state.cart };
                //remove 1 from the count of the product in the cart. if it hits 0, remove the key
                tempCart[action.payload] - 1 === 0
                    ? delete tempCart[action.payload]
                    : tempCart[action.payload] -= 1
                    //rounds total to 2 decimal places to remove rounding errors with math
                    const fixedPrice = (Number.parseFloat(state.total) - Number.parseFloat(state.products[action.payload].price)).toFixed(2);
                    return { ...state, total: fixedPrice, cart: tempCart };
            }
            return state;
        default:
            return state;
    }
}

export default rootReducer;