import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { CssBaseline, Container } from '@material-ui/core';

import theme from '../../theme';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { SEO } from '../SEO';

export const Layout = ({ children, title, description }) => (
  <ThemeProvider theme={theme}>
    <StyledThemeProvider theme={theme}>
      <CssBaseline />
      <SEO title={title || ''} description={description || ''} />
      <Header />
      <Container maxWidth="md">
        {children}
        <Footer />
      </Container>
    </StyledThemeProvider>
  </ThemeProvider>
);
