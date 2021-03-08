import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    console.log(props);
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div product-img>
                <img src={img} alt=""/>
            </div>
            <di className="viewContainer">
                <h2>{name}</h2>
                <p><small>by : {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left is stock - Order soon</small></p>
            <button 
                className="main-cart"
                onClick={() => {props.handleAddProduct(props.product)}}
            >
                <FontAwesomeIcon icon={faShoppingCart} />
                add to cart
            </button>
            </di>
        </div>
    );
};

export default Product;<h2>This is a Product</h2>