import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import CartButtons from "./CartButtons";

const ProductPage = () => {
    const { id } = useParams();
    const product = useSelector(store => store.products[id]);

    //if the id isn't a product, just return to the products list
    if (!product) {
        return (<Navigate to='/' replace />)
    }

    return (
        <div className="row justify-content-center">
            <div className="col-6">
                <img src={product.image_url} alt='' className='img-fluid' />
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <div>
                    Price: ${product.price}
                    <CartButtons id={id} />
                </div>

            </div>
        </div>
    )
}

export default ProductPage;