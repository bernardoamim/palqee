import React, { useState } from 'react';
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

import BreadCrumbs from '../../components/BreadCrumb';
import {
  Container,
  Title,
  Description,
  CardsContainer,
  FilmCard,
} from '../../styles/pages/CharacterInfo';

function Characters(props) {
  const initialState = { ...props };
  const [crumbs, setCrumbs] = useState([
    { key: '', label: 'Characters' },
    {
      key: `characters/${initialState.person.id}`,
      label: initialState.person.name,
    },
  ]);

  return (
    <Container>
      <BreadCrumbs crumbs={crumbs} />
      <Title>{initialState.person.name}</Title>
      <Description>
        <p>
          <i>&#8220;{initialState.quote.content}&#8221;</i>
          <span> - {initialState.quote.author}</span>
        </p>
      </Description>

      <h2>Films</h2>

      <CardsContainer>
        {initialState.person.films.map(film => (
          <FilmCard key={film.id}>
            <h3>{film.title}</h3>

            <div>
              <p>
                <span> Episode:</span> {film.episodeID}
              </p>
              <p>
                <span> Director:</span> {film.director}
              </p>
              <p>
                <span> Producer:</span> {film.producers[0]}
              </p>
              <p>
                <span> Release Date:</span> {film.releaseDate}
              </p>
            </div>
          </FilmCard>
        ))}
      </CardsContainer>
    </Container>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(`https://api.quotable.io/random`);
  const quote = await response.json();

  const client = new ApolloClient({
    uri: process.env.QUOTES_API_URL,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query Get($cId: ID!) {
        person(id: $cId) {
          id
          name
          filmConnection {
            films {
              id
              title
              episodeID
              director
              producers
              releaseDate
            }
          }
        }
      }
    `,
    variables: { cId: params.id },
  });

  const { filmConnection, ...rest } = data.person;

  const formattedData = {
    ...rest,
    films: filmConnection.films,
  };

  return {
    props: {
      person: formattedData,
      quote,
    },
  };
}

export default Characters;
