import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
