import React, { useCallback, useState } from 'react';

function sortData({ tableData, key, reverse }) {
  if (!key) return tableData;

  const sortedData = tableData.sort((a, b) =>
    tableData[key] > b[key] ? 1 : -1,
  );

  if (reverse) return sortedData.reverse();

  return sortedData;
}

function SortButton({ sortOrder, columnKey, sortKey, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${
        sortKey === columnKey && sortOrder === 'desc'
          ? 'sort-button sort-reverse'
          : 'sort-button'
      }`}
    >
      &#9650;
    </button>
  );
}

function Table({ data }) {
  const [sortKey, setSortKey] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');

  const headers = [
    { key: 'id', label: 'ID' },
    { key: 'first_name', label: 'First Name' },
    { key: 'last_name', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    { key: 'gender', label: 'Gender' },
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
    <table>
      <thead>
        <tr>
          {headers.map(row => (
            <td key={row.key}>
              {row.label}
              <SortButton
                columnKey={row.key}
                onClick={() => changeSort(row.key)}
                {...{ sortOrder, sortKey }}
              />
            </td>
          ))}
        </tr>
      </thead>

      <tbody>
        {sortedData().map(person => (
          <tr key={person.id}>
            <td>{person.id}</td>
            <td>{person.first_name}</td>
            <td>{person.last_name}</td>
            <td>{person.email}</td>
            <td>{person.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
