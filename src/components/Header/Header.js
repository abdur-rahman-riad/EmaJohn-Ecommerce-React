import React from 'react';
import logo from "../../images/logo.png";
import './Header.css'

const Header = () => {

    return (
        <div className="header">
            {/* NavBar Design */}
            <div className="nav-bar">
                <div className="nav-logo">
                    <img className="logo" src={logo} alt="Logo" />
                </div>
                <div className="nav-item">
                    <a href="/shop">Shop</a>
                    <a href="/orders">Order Review</a>
                    <a href="/inventory">Manage Inventory</a>
                </div>
            </div>

            {/* Search Option Design */}
            <div className="search-option">
                <input type="text" placeholder="Search your products" />
                <button>Search</button>
            </div>
        </div>
    );
};

export default Header;