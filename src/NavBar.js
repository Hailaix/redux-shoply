import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    //grabs the current cart and reduces it down to the number of items within the cart
    const cart = useSelector(store => store.cart);
    const cartItems = Object.keys(cart).reduce((acc, currentVal) => (
        acc + cart[currentVal]
    ), 0);
    return (
        <nav className='navbar navbar-expand-lg bg-dark'>
            <div className='container-fluid'>
                <NavLink className='navbar-brand text-light' to='/' >Shoply</NavLink>
                <NavLink className='nav-link' to='/cart'>Cart({cartItems})</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;