import React, { useContext } from 'react';
import Title from '../Title/Title';
import CartColumns from './CartColumns';
import { ProductContext } from '../ProductProvider';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';

Cart.propTypes = {};

function Cart(props) {
  const {
    cart,
    increment,
    decrement,
    removeProductItem,
    cartSubTotal,
    cartTotal,
    cartTax,
    clearCart,
  } = useContext(ProductContext);
  const handle = {
    increment,
    decrement,
    removeProductItem,
  };
  const totalCart = {
    cartSubTotal,
    cartTotal,
    cartTax,
    clearCart,
  };
  return (
    <section>
      {cart.length > 0 ? (
        <>
          <Title name="your" title="cart" />
          <CartColumns />
          <CartList cart={cart} handle={handle} />
          <CartTotals cart={cart} totalCart={totalCart} />
        </>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
}

export default Cart;
