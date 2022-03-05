import React, { useState, useCallback } from 'react';
import { gql, useQuery } from '@apollo/client';
import { createClient } from '../lib/client';
import BreadCrumbs from '../components/BreadCrumb';
import Table from '../components/Table';

import {
  Container,
  Title,
  Description,
  Pagination,
  PerPageControl,
  PageControl,
} from '../styles/pages/Home';

const GET_CHARACTERS_QUERY = gql`
  query GetCharacters($offset: Int, $limit: Int) {
    allPeople(offset: $offset, limit: $limit) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      people {
        id
        name
        hairColor
        skinColor
        eyeColor
        gender
        homeworld {
          id
          name
        }
      }
    }
  }
`;

function Home({ characters: charactersList, quote, pageInfo }) {
  const [crumbs, setCrumbs] = useState([{ key: '', label: 'Characters' }]);
  const [characters, setCharacters] = useState(charactersList);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const handlePerPageChange = useCallback(value => {
    setPerPage(value);
  }, []);

  return (
    <Container>
      <BreadCrumbs crumbs={crumbs} />
      <Title>Star Wars Characters</Title>
      <Description>
        <p>
          <i>&#8220;{quote.content}&#8221;</i>
          <span> - {quote.author}</span>
        </p>
      </Description>

      <Table data={characters} />
      <Pagination>
        <PerPageControl>
          <p>Per page:</p>
          <button
            type="button"
            onClick={() => handlePerPageChange(5)}
            className={perPage === 5 ? 'selected' : ''}
          >
            5
          </button>
          <button
            type="button"
            onClick={() => handlePerPageChange(10)}
            className={perPage === 10 ? 'selected' : ''}
          >
            10
          </button>
          <button
            type="button"
            onClick={() => handlePerPageChange(20)}
            className={perPage === 20 ? 'selected' : ''}
          >
            20
          </button>
        </PerPageControl>
        <PageControl>
          <button
            type="button"
            onClick={() => setPage(prev => prev - 1)}
            disabled={!pageInfo.hasPreviousPage}
          >
            {'<'}
          </button>
          <p> Page: {page} </p>
          <button
            type="button"
            onClick={() => setPage(prev => prev + 1)}
            disabled={!pageInfo.hasNextPage}
          >
            {'>'}
          </button>
        </PageControl>
      </Pagination>
    </Container>
  );
}

export async function getStaticProps() {
  const response = await fetch(`https://api.quotable.io/random`);
  const quote = await response.json();

  const apollo = createClient();

  const { data } = await apollo.query({
    query: gql`
      {
        allPeople(first: 5) {
          totalCount
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          people {
            id
            name
            hairColor
            skinColor
            eyeColor
            gender
            homeworld {
              id
              name
            }
          }
        }
      }
    `,
  });

  const formattedCharecters = data.allPeople.people.map(
    ({ homeworld, ...rest }) => ({
      homeworld: homeworld.name,
      ...rest,
    }),
  );

  return {
    props: {
      initialApolloState: apollo.cache.extract(),
      totalCount: data.allPeople.totalCount,
      pageInfo: data.allPeople.pageInfo,
      characters: formattedCharecters,
      quote,
    },
  };
}

export default Home;
