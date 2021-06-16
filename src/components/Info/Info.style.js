import styled from 'styled-components';

export const InfoBlock = styled.div`
  width: ${(props) => props.width};
  margin: 2rem 2rem;
  h2 {
    text-transform: uppercase;
    font-weight: 700;
  }
  .line-beauty {
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 0.3rem 0;
  }
  .bold {
    height: 0.5rem;
    width: 4rem;
    background-color: #72b3a2;
  }
  .thin {
    height: 0.2rem;
    width: 100%;
    background-color: #e1e1e1;
  }
  p {
    font-weight: 500;
  }
`;
