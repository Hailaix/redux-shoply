import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
    const { cart, total } = useSelector(store => (store), shallowEqual)

    return (
        <>
            <h1>Cart</h1>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(cart).map(([key, value]) => (
                        <CartItem key={key} id={key} quantity={value} />
                    ))}
                </tbody>
            </table>

            <div>Total: ${total}</div>
        </>
    )
}

export default Cart;