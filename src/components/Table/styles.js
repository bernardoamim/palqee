/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.table`
  margin-top: 2.5rem;
  background-color: #fff;
  box-shadow: 3px 3px 15px rgba(50, 54, 80, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  border-spacing: 0;
`;

export const TableHead = styled.thead`
  background-color: #f2f2f2;
  border: 0;
`;

export const TableHeaderRow = styled.tr`
  height: 3.5rem;
  color: #63646a;
  font-weight: 500;

  > td:first-of-type {
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
  }

  > td:last-of-type {
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
  }

  > td {
    padding-left: 0.8rem;

    &:hover {
      cursor: pointer;
      background: rgba(99, 100, 106, 0.1);
    }
  }
`;

export const SortTriangle = styled.button`
  margin-left: 0.5rem;
  color: #63646a;

  &.sort-reverse {
    transform: rotate(180deg);
  }
`;

export const TableBody = styled.tbody``;

export const TableBodyRow = styled.tr`
  height: 3rem;

  &:hover {
    background: rgba(50, 54, 80, 0.05);
    cursor: pointer;
  }

  > td {
    padding: 1rem;
  }
`;
