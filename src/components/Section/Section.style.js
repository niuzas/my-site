import styled from 'styled-components';

export const SectionBlock = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: center;
  align-items: start;
`;
