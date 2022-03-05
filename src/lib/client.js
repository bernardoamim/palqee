/* eslint-disable import/prefer-default-export */
import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

let globalApollo = null;

const httpLink = new HttpLink({
  uri: process.env.QUOTES_API_URL,
  fetch,
});

export const createClient = initialState => {
  if (globalApollo) return globalApollo;

  globalApollo = new ApolloClient({
    link: httpLink,
    ssrMode: !process.browser,
    cache: new InMemoryCache().restore(initialState || {}),
  });

  return globalApollo;
};

export const useApolloStore = initialState => {
  const store = useMemo(() => createClient(initialState), [initialState]);

  return store;
};
