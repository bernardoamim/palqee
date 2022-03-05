import React, { useState } from 'react';
import { gql } from '@apollo/client';

import BreadCrumbs from '../components/BreadCrumb';
import Table from '../components/Table';

import {
  Container,
  Title,
  Description,
  Pagination,
} from '../styles/pages/Home';
import { createClient } from '../lib/client';

function Home(props) {
  const initialState = { ...props };
  const [crumbs, setCrumbs] = useState([{ key: '', label: 'Characters' }]);
  const [characters, setCharacters] = useState(initialState.characters);
  const [perPage, setPerPage] = useState(5);

  return (
    <Container>
      <BreadCrumbs crumbs={crumbs} />
      <Title>Star Wars Characters</Title>
      <Description>
        <p>
          <i>&#8220;{initialState.quote.content}&#8221;</i>
          <span> - {initialState.quote.author}</span>
        </p>
      </Description>

      <Table data={characters} />
      <Pagination>
        <p>Per page:</p>
        <button
          type="button"
          onClick={() => setPerPage(5)}
          className={perPage === 5 ? 'selected' : ''}
        >
          5
        </button>
        <button
          type="button"
          onClick={() => setPerPage(10)}
          className={perPage === 10 ? 'selected' : ''}
        >
          10
        </button>
        <button
          type="button"
          onClick={() => setPerPage(20)}
          className={perPage === 20 ? 'selected' : ''}
        >
          20
        </button>
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
