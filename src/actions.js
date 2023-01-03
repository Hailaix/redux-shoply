
//will add an item with key id to the cart
export const CART_ADD = id => {
    return {
        type: 'CART_ADD',
        payload: id
    }
}

//will remove an item with key id from the cart
export const CART_RM = id => {
    return {
        type: 'CART_REMOVE',
        payload: id
    }
}