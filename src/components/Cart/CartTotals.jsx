import React from 'react';
import { NavLink } from 'react-router-dom';

CartTotals.propTypes = {};

function CartTotals({ cart, totalCart }) {
  const { cartSubTotal, cartTotal, cartTax, clearCart } = totalCart;
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mt-2 ms-sm-5 ms-md-auto col-sm-8 text-capitalize text-end">
          <NavLink to="/">
            <button
              className="btn btn-outline-danger text-uppercase mb-3 mx-5"
              onClick={clearCart}
            >
              clear cart
            </button>
          </NavLink>
          <h5>
            <span className="text-title">subTotal:</span>
            <strong>$ {cartSubTotal}</strong>
          </h5>
          <h5>
            <span className="text-title">tax:</span>
            <strong>$ {cartTax}</strong>
          </h5>
          <h5>
            <span className="text-title">total:</span>
            <strong>$ {cartTotal}</strong>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default CartTotals;
