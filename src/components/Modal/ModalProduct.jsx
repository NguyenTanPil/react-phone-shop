import React, { useContext } from 'react';
import { ProductContext } from '../ProductProvider';
import styled from 'styled-components';
import { ButtonContainer } from '../Styled/Button';
import { NavLink } from 'react-router-dom';

ModalProduct.propTypes = {};

function ModalProduct(props) {
  const { modalOpen, closeModal, modalProduct } = useContext(ProductContext);
  const { img, title, price } = modalProduct;
  if (!modalOpen) {
    return null;
  } else {
    return (
      <ModalContainer>
        <div className="container">
          <div className="row">
            <div
              id="modal-product"
              className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
            >
              <h5>add item to the cart</h5>
              <img className="img-fluid" src={img} alt="product" />
              <h5>{title}</h5>
              <h5 className="text-muted">price: $ {price}</h5>

              <NavLink to="/">
                <ButtonContainer onClick={() => closeModal()}>
                  store
                </ButtonContainer>
              </NavLink>
              <NavLink to="/cart">
                <ButtonContainer cart onClick={() => closeModal()}>
                  go to cart
                </ButtonContainer>
              </NavLink>
            </div>
          </div>
        </div>
      </ModalContainer>
    );
  }
}

export default ModalProduct;

const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1008;
  #modal-product {
    background-color: var(--mainWhite);
  }
`;
