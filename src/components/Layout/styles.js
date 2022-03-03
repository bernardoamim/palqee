import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 100vw;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: ${props => props.theme.colors.backgroud};
  max-width: calc(100vw - var(--sidebar-width));
  width: calc(100vw - var(--sidebar-width));
  margin-left: var(--sidebar-width);
`;
