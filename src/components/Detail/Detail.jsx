import React, { useContext } from 'react';
import { ProductContext } from '../ProductProvider';
import { NavLink } from 'react-router-dom';
import { ButtonContainer } from '../Styled/Button';

Detail.propTypes = {};

function Detail(props) {
  const { detail, addCart, openModal } = useContext(ProductContext);
  const { id, title, img, company, price, info, inCart } = detail;

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{title}</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <img className="img-fluid" src={img} alt="product" />
        </div>
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h2>modal: {title}</h2>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
            made by: <span className="text-uppercase">{company}</span>
          </h4>
          <h4 className="text-blue">
            price: <span>$</span>
            {price}
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            some info about product
          </p>
          <p className="text-muted lead">{info}</p>
          <div>
            <NavLink to="/">
              <ButtonContainer>back to product</ButtonContainer>
            </NavLink>
            <ButtonContainer
              cart
              disabled={inCart ? true : false}
              onClick={() => {
                addCart(id);
                openModal(id);
              }}
            >
              {inCart ? 'In cart' : 'Add to cart'}
            </ButtonContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
