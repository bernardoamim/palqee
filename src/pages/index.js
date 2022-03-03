import React, { useState } from 'react';
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { Container } from '../styles/pages/Home';
import BreadCrumbs from '../components/BreadCrumb';

function Home(results) {
  const initialState = results;
  const [characters, setCharacters] = useState(initialState.characters);
  const [crumbs, setCrumbs] = useState(['Home', 'Characters']);

  return (
    <Container>
      <BreadCrumbs crumbs={crumbs} />
      <h1>Hello</h1>
    </Container>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql/',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query {
        characters(page: 1) {
          info {
            count
            pages
          }
          results {
            name
            id
            location {
              id
              name
            }
            origin {
              name
              id
            }
            episode {
              id
              episode
              air_date
            }
            image
          }
        }
      }
    `,
  });

  return {
    props: {
      characters: data.characters.results,
    },
  };
}

export default Home;
