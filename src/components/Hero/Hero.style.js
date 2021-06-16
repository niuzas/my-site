import styled from 'styled-components';

export const HeroBlock = styled.div`
  .gray-beauty {
    width: 100%;
    height: 1.5rem;
    background-color: #e1e1e1;
  }
  .green-beauty {
    width: 95%;
    height: 4rem;
    background-color: #72b3a2;
    margin: 0 auto;
  }
  .text-box {
    margin: -1.5rem auto 1rem;
    max-width: 75%;
    padding: 2rem;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 5px solid black;
  }

  p {
    display: block;
    width: 100%;
    background-color: green;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 600;
  }
  h2 {
    font-size: 1.5rem;
    color: white;
    background-color: black;
    padding: 0.3rem 2rem;
  }
`;
