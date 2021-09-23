import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const { name, img, category, price, star, starCount, stock, seller } = props.product;
    return (
        <div className="single-product">
            <div className="product-photo">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h3>{name}</h3>
                <h3 className="price">Price: ${price}</h3>
                <p>Category: {category}</p>
                <p>Seller: {seller}</p>
                <p>Rating: <FontAwesomeIcon icon={faStar} /> {star}({starCount})</p>
                <p>Only {stock} in stock</p>
                <button onClick={() => props.handleAddToCart(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;