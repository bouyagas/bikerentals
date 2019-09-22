import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="navbar is-primary">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">
              <h1 className="title is-5 has-text-white ">Bike Rentals</h1>
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <h1 className="has-text-weight-bold">Checkout</h1>
            <button className="button is-primary is-medium ">
              <Link to="/checkout">
                <i className="fas fa-shopping-cart has-text-white"></i>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
