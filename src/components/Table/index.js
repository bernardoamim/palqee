/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useState, useEffect } from 'react';
import {
  Container,
  TableHead,
  TableBody,
  FilterSection,
  TableContent,
  TableHeaderRow,
  TableBodyRow,
  StyledSortButton,
  SortTriangle,
} from './styles';

function sortData({ tableData, key, reverse }) {
  if (!key) return tableData;

  const sortedData = tableData.sort((a, b) => (a[key] > b[key] ? 1 : -1));

  if (reverse) return sortedData.reverse();

  return sortedData;
}

function SortButton({ columnKey, onClick, sortOrder, sortKey, title }) {
  return (
    <StyledSortButton type="button" onClick={onClick}>
      {title}

      <SortTriangle
        className={
          sortKey === columnKey && sortOrder === 'desc' ? 'sort-reverse' : ''
        }
      >
        &#9650;
      </SortTriangle>
    </StyledSortButton>
  );
}

function Table({ data }) {
  const [sortKey, setSortKey] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortedData, setSortedData] = useState(data);
  const [filterBy, setFilterBy] = useState('');
  const [searchText, setSearchText] = useState('');

  const headers = [
    { key: 'name', label: 'Name' },
    { key: 'hairColor', label: 'Hair Color' },
    { key: 'skinColor', label: 'Skin Color' },
    { key: 'eyeColor', label: 'Eye Color' },
    { key: 'gender', label: 'Gender' },
    { key: 'homeworld', label: 'Homeworld' },
  ];

  useEffect(() => {
    const sorted = sortData({
      tableData: data,
      key: sortKey,
      reverse: sortOrder === 'desc',
    });

    setSortedData(sorted);
  }, [data, sortKey, sortOrder]);

  const handleSortChange = useCallback(key => {
    setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));

    setSortKey(key);
  }, []);

  const handleFilterByChange = useCallback(event => {
    setFilterBy(event.target.value);
  }, []);

  const handleSearchTextChange = useCallback(event => {
    setSearchText(event.target.value);
  }, []);

  useEffect(() => {
    if (!searchText.length) {
      setSortedData(data);
      setSearchText('');
      return;
    }

    const filteredData = data.filter(character =>
      String(character[filterBy])
        .toLowerCase()
        .includes(String(searchText).toLowerCase()),
    );

    setSortedData(filteredData);
  }, [searchText, filterBy]);

  return (
    <Container>
      <FilterSection>
        <label htmlFor="columns">Filter by:</label>

        <select
          name="columns"
          id="columns"
          onChange={e => handleFilterByChange(e)}
          defaultValue=""
        >
          <option disabled value="">
            -- select an option --
          </option>
          <option value="hairColor">Hair Color</option>
          <option value="eyeColor">Eye Color</option>
          <option value="homeworld">Homeworld</option>
        </select>

        <input
          type="text"
          placeholder="Search..."
          onChange={e => handleSearchTextChange(e)}
          disabled={!filterBy.length}
          value={searchText}
        />
      </FilterSection>
      <TableContent>
        <TableHead>
          <TableHeaderRow>
            {headers.map(column => (
              <td key={column.key}>
                <SortButton
                  columnKey={column.key}
                  onClick={() => handleSortChange(column.key)}
                  sortOrder={sortOrder}
                  sortKey={sortKey}
                  title={column.label}
                />
              </td>
            ))}
          </TableHeaderRow>
        </TableHead>

        <TableBody>
          {sortedData.map(character => (
            <TableBodyRow key={character.id}>
              <td>
                <a href={`/characters/${character.id}`}>{character.name}</a>
              </td>
              <td>{character.hairColor}</td>
              <td>{character.skinColor}</td>
              <td>{character.eyeColor}</td>
              <td>{character.gender}</td>
              <td>{character.homeworld}</td>
            </TableBodyRow>
          ))}
        </TableBody>
      </TableContent>
    </Container>
  );
}

export default Table;
