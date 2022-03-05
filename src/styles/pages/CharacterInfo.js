/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;

  > h2 {
    margin-top: 3rem;
    color: ${props => props.theme.colors.primary};
  }
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

export const CardsContainer = styled.div`
  display: grid;
  margin-top: 2.5rem;
  min-height: 28rem;

  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1.5rem;
  row-gap: 1.5rem;
  grid-template-areas:
    'c c c'
    'c c c';
`;

export const FilmCard = styled.div`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.primary};
  box-shadow: 3px 3px 15px rgba(50, 54, 80, 0.05);
  border-radius: 8px;
  border-spacing: 0;
  width: 100%;
  min-height: 16rem;
  height: auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > h3 {
    font-size: 1.6rem;
    text-align: center;
    color: ${props => props.theme.colors.highlight};
  }

  > div {
    > p {
      color: ${props => props.theme.colors.dark};
      line-height: 1.8rem;

      > span {
        font-weight: 500;
        color: ${props => props.theme.colors.primary};
      }
    }
  }
`;
