import styled from 'styled-components';

export const ContactBlock = styled.div`
  width: ${(props) => props.width};
  margin: 2rem 2rem;
  h2 {
    text-transform: uppercase;
    font-weight: 700;
    color: white;
    background-color: black;
    text-align: center;
  }

  p {
    margin: 0.5rem;
    font-weight: 500;
    text-align: center;
  }
`;
