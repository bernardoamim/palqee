/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2.5rem;
  background-color: #fff;
  box-shadow: 3px 3px 15px rgba(50, 54, 80, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  border-spacing: 0;
  min-height: 28rem;
`;

export const FilterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 3.5rem;
  color: #63646a;

  > select {
    margin-left: 0.5rem;
    background-color: #f2f2f2;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    color: #1a3054;
  }

  > input {
    margin-left: 1rem;
    background-color: #f2f2f2;
    border: none;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    border-radius: 4px;
    color: #1a3054;

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export const TableContent = styled.table`
  width: 100%;
  margin-top: 1.5rem;
  border-spacing: 0;
`;

export const TableHead = styled.thead`
  background-color: #f2f2f2;
  border: 0;
  width: 100%;
`;

export const TableHeaderRow = styled.tr`
  height: 3.5rem;
  width: 100%;

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

export const StyledSortButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  color: #63646a;
  font-weight: 700;
`;

export const SortTriangle = styled.p`
  margin-left: 0.5rem;
  color: #63646a;

  &.sort-reverse {
    transform: rotate(180deg);
  }
`;

export const TableBody = styled.tbody`
  width: 100%;
`;

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
