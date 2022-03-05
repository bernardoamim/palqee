/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.highlight};
  margin-top: 2.5rem;
`;

export const Description = styled.cite`
  margin-top: 2rem;
  font-size: 1.2rem;
  line-height: 2rem;
  padding: 1rem;
  background-color: #f2f2f2;
  color: #63646a;
  border-radius: 8px;

  span {
    color: #333;
    margin-left: 0.5rem;
  }
`;

export const Pagination = styled.footer`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  color: #63646a;
`;

export const PerPageControl = styled.div`
  display: flex;
  align-items: center;

  > button {
    margin-left: 0.5rem;
    font-size: 1rem;
    color: #63646a;

    &.selected {
      color: ${props => props.theme.colors.highlight};
      text-decoration: underline;
      font-weight: bold;
    }
  }
`;

export const PageControl = styled.div`
  display: flex;
  align-items: center;

  > p {
    color: ${props => props.theme.colors.primary};
    margin: 1rem;
  }

  > button {
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    background-color: #c2c2c2;
    font-size: 1rem;
    color: ${props => props.theme.colors.white};

    &:disabled {
      cursor: not-allowed;
    }
  }
`;
