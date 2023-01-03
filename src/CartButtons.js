import React from "react";
import { useDispatch } from "react-redux";
import { CART_ADD, CART_RM } from "./actions";

const CartButtons = ({ id }) => {
    const dispatch = useDispatch();
    //adds the related item to the cart in store
    const add = e => (dispatch(CART_ADD(id)));
    //removes the related item to the cart in store
    const rm = e => (dispatch(CART_RM(id)));
    return (
        <span>
            <button className='btn btn-sm btn-outline-primary'onClick={add}>+</button>
            <button className='btn btn-sm btn-outline-danger' onClick={rm}>-</button>
        </span>
    )
}

export default CartButtons;