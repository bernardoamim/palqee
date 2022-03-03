import React, { useCallback, useState } from 'react';
import {
  Container,
  TableHead,
  TableBody,
  TableHeaderRow,
  TableBodyRow,
  SortTriangle,
} from './styles';

function sortData({ tableData, key, reverse }) {
  if (!key) return tableData;
  console.log('1');

  const sortedData = tableData.sort((a, b) => (a[key] > b[key] ? 1 : -1));

  console.log(sortedData);

  if (reverse) return sortedData.reverse();

  console.log('2');
  return sortedData;
}

function SortButton({ sortOrder, columnKey, sortKey, onClick }) {
  return (
    <SortTriangle
      type="button"
      onClick={onClick}
      className={`${
        sortKey === columnKey && sortOrder === 'desc'
          ? 'sort-button sort-reverse'
          : 'sort-button'
      }`}
    >
      &#9650;
    </SortTriangle>
  );
}

function Table({ data }) {
  const [sortKey, setSortKey] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const headers = [
    { key: 'name', label: 'Name' },
    { key: 'hairColor', label: 'Hair Color' },
    { key: 'skinColor', label: 'Skin Color' },
    { key: 'eyeColor', label: 'Eye Color' },
    { key: 'gender', label: 'Gender' },
    { key: 'homeworld', label: 'Homeworld' },
  ];

  const sortedData = useCallback(
    () => sortData({ tableData: data, sortKey, reverse: sortOrder === 'desc' }),
    [data, sortKey, sortOrder],
  );

  function changeSort(key) {
    setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));

    setSortKey(key);
  }

  return (
    <Container>
      <TableHead>
        <TableHeaderRow>
          {headers.map(column => (
            <td key={column.key}>
              {column.label}

              <SortButton
                columnKey={column.key}
                onClick={() => changeSort(column.key)}
                {...{ sortOrder, sortKey }}
              />
            </td>
          ))}
        </TableHeaderRow>
      </TableHead>

      <TableBody>
        {sortedData().map(character => (
          <TableBodyRow key={character.id}>
            <td>{character.name}</td>
            <td>{character.hairColor}</td>
            <td>{character.skinColor}</td>
            <td>{character.gender}</td>
            <td>{character.eyeColor}</td>
            <td>{character.homeworld.name}</td>
          </TableBodyRow>
        ))}
      </TableBody>
    </Container>
  );
}

export default Table;
