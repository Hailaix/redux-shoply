import React from "react";
import { useSelector } from "react-redux";
import CartButtons from "./CartButtons";

const CartItem = ({ id, quantity }) => {
    const product = useSelector(store => (
        store.products[id]
    ));
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{quantity}</td>
            <td><CartButtons id={id} /></td>
        </tr>
        // <li>{product.name} : {quantity} <CartButtons id={id} /></li>
    )
}

export default CartItem;