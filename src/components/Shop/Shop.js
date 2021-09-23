import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    // Load Data
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("./products.JSON")
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);

    // Event Handler for Add to Cart
    const handleAddToCart = (product) => {
        console.log(product.name);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                <h3>Products: {products.length}</h3>
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <h5>Items Order</h5>

                <p>Items:</p>
                <p>Shipping: </p>
                <p>Sub-total:</p>
                <p>Tax:</p>
                <h4>Total:</h4>
                <button>Place Order</button>
            </div>
        </div>
    );
};

export default Shop;