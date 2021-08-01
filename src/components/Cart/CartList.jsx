import React from 'react';
import CartItem from './CartItem';

CartRow.propTypes = {};

function CartRow(props) {
  const { cart, handle } = props;

  return (
    <div className="container-fluid">
      <div className="row">
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} handle={handle} />;
        })}
      </div>
    </div>
  );
}

export default CartRow;
