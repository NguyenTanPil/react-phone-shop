import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg';
import { ButtonContainer } from '../Styled/Button';
import styled from 'styled-components';

Navbar.propTypes = {};

function Navbar(props) {
  return (
    <NavWraper className="navbar navbar-expand-lg navbar-dark  px-sm-5">
      <NavLink to="/">
        <img className="navbar-brand" src={logo} alt="logo" />
      </NavLink>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <NavLink className="nav-link" to="/">
            Products
          </NavLink>
        </li>
      </ul>
      <NavLink className="ms-auto" to="/cart">
        <ButtonContainer>
          <span className="me-2">
            <i className="fas fa-cart-plus"></i>
          </span>
          My cart
        </ButtonContainer>
      </NavLink>
    </NavWraper>
  );
}

export default Navbar;

const NavWraper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
