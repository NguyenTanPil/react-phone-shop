import React, { useContext } from 'react';
// import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ProductContext } from '../ProductProvider';
import PropTypes from 'prop-types';
import { ProductWrap } from '../Styled/ProductWrap';

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

// Product.defaultProps = {
//   product: PropTypes.shape({
//     id: 0,
//     img: 'https://via.placeholder.com/400',
//     title: '',
//     price: 0,
//     inCart: false,
//   }),
// };

function Product(props) {
  const { id, title, img, price, inCart } = props.product;
  const { handleDetail, addCart, openModal } = useContext(ProductContext);
  return (
    <ProductWrap className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div className="img-container p-5" onClick={() => handleDetail(id)}>
          <NavLink to="/detail">
            <img src={img} alt="product" className="card-img-top" />
          </NavLink>
          <button
            className="cart-btn"
            disabled={inCart ? true : false}
            onClick={() => {
              addCart(id);
              openModal(id);
            }}
          >
            {inCart ? (
              <p className="text-capitalize mb-0" disabled>
                in cart
              </p>
            ) : (
              <i className="fas fa-cart-plus"></i>
            )}
          </button>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="text-blue fst-italic mb-0">
            <span className="me-1">$</span>
            {price}
          </h5>
        </div>
      </div>
    </ProductWrap>
  );
}

export default Product;
