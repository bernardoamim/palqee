import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.backgroud};
  height: 100vh;
  align-items: stretch;
  max-width: calc(100vw - var(--sidebar-width));
  width: calc(100vw - var(--sidebar-width));
`;
