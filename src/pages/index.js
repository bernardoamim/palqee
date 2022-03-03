import React, { useState } from 'react';
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

import BreadCrumbs from '../components/BreadCrumb';
import Table from '../components/Table';

import { Container, Title, Description } from '../styles/pages/Home';

function Home(props) {
  const initialState = { ...props };
  const [characters, setCharacters] = useState(initialState.characters);
  const [crumbs, setCrumbs] = useState(['Home', 'Characters']);

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
    </Container>
  );
}

export async function getStaticProps() {
  const response = await fetch(`https://api.quotable.io/random`);
  const quote = await response.json();

  const swapiClient = new ApolloClient({
    uri: 'http://localhost:62273',
    cache: new InMemoryCache(),
  });

  const { data } = await swapiClient.query({
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

  return {
    props: {
      characters: data.allPeople.people,
      quote,
    },
  };
}

export default Home;
