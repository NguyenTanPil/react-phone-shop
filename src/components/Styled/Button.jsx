import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background-color: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${(props) =>
    props.cart ? 'var(--mainYellow)' : 'var(--lightBlue)'};
  border-radius: 0.5rem;
  color: ${(props) => (props.cart ? 'var(--mainYellow)' : 'var(--lightBlue)')};
  cursor: pointer;
  font-size: 1.4rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  padding: 0.2rem 0.5rem;
  transition: all 0.3s linear 0s;
  text-transform: capitalize;

  &:hover {
    background-color: ${(props) =>
      props.cart ? 'var(--mainYellow)' : 'var(--lightBlue)'};
    color: var(--mainBlue);
  }

  &:focus {
    outline: none;
  }
`;
