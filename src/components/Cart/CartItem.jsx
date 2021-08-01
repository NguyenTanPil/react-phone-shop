import React from 'react';

CartItem.propTypes = {};

function CartItem({ item, handle }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeProductItem } = handle;

  return (
    <div className="col-10 col-md-6 col-lg-12 mx-auto border-bottom border-1 ">
      <div className="row my-2 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img
            className="img-fluid"
            src={img}
            alt="img product"
            style={{ width: '5rem', height: '5rem' }}
          />
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">product: </span> {title}
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">price: </span> {price}
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
          <div className="d-flex justify-content-center">
            <div>
              <span
                className="btn btn-black mx-1"
                onClick={() => decrement(id)}
              >
                -
              </span>
              <span className="btn btn-black mx-1">{count}</span>
              <span
                className="btn btn-black mx-1"
                onClick={() => increment(id)}
              >
                +
              </span>
            </div>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <div className="cart-icon" onClick={() => removeProductItem(id)}>
            <i className="fas fa-trash"></i>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <strong>item total: </strong> {total}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
