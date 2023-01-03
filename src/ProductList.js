import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartButtons from './CartButtons';

const ProductList = () => {
    //products is an object with product ids as keys, total is the total price of the cart
    const { products, total } = useSelector(store => (store), shallowEqual);
    return (
        <div>
            <h1>Products</h1>
            <div className='row justify-content-center'>
                {Object.entries(products).map(([key, product]) => (
                    <div className='card col-md-3 m-2' key={key}>
                        <div className='card-body'>
                            <div className='card-title'>
                                <Link className='link-dark' to={`/products/${key}`}>{product.name}</Link>
                            </div>
                            <CartButtons id={key} />
                        </div>
                    </div>))}
            </div>
            <div className='row'>
                <p>Total: ${total}</p>
            </div>
        </div>
    )
}

export default ProductList;