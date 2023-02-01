import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6rem;
  height: 100%;
  line-height: 1;

  > div {
    flex-basis: 26%;
    flex-grow: 1;
  }
`;
