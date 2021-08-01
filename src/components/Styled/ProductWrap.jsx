import styled from 'styled-components';

export const ProductWrap = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background-color: rgba(247, 247, 247);
    }
  }
  .cart-btn {
    background: var(--lightBlue);
    border: none;
    border-radius: 0.5rem 0 0 0;
    color: var(--mainWhite);
    font-size: 1.4rem;
    padding: 0.2rem 0.4rem;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(100%, 100%);
    transition: all 0.5s linear 0s;
    &:hover {
      color: var(--mainBlue);
      cursor: pointer;
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
    .card-img-top {
      transition: all 0.5s linear;
    }
    &:hover {
      .card-img-top {
        transform: scale(1.2);
      }
      .cart-btn {
        transform: translate(0, 0);
      }
    }
  }
`;
