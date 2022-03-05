import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';
import { useApolloStore } from '../lib/client';

function MyApp({ Component, pageProps }) {
  const client = useApolloStore(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyle />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
