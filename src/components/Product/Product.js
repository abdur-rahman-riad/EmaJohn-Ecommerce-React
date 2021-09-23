import React from 'react';
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
                <h4>Price: ${price}</h4>
                <p>Category: {category}</p>
                <p>Seller: {seller}</p>
                <p>Rating: {star}({starCount})</p>
                <p>Only {stock} in stock</p>
                <button onClick={() => props.handleAddToCart(props.product)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;