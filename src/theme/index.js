import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      md: 800,
    },
  },
  typography: {
    fontSize: 18,
    fontFamily: [
      '-apple-system',
      'system-ui',
      'Helvetica Neue',
      'Segoe UI',
      'Hiragino Kaku Gothic ProN',
      'Hiragino Sans',
      'ヒラギノ角ゴ ProN W3',
      'Arial',
      'メイリオ',
      'Meiryo',
      'sans-serif',
    ].join(','),
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    h1: {
      fontSize: '2.25rem',
    },
    h2: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.75rem',
    },
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '1.25rem',
    },
    h6: {
      fontSize: '1rem',
    },
  },
  palette: {
    border: '#bdbdbd',
    primary: {
      light: '#5ed1c4',
      main: '#34b3a5',
      dark: '#00ab98',
    },
    text: {
      primary: '#666',
    },
    background: {
      default: '#fff',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          lineHeight: 28 / 16,
          fontSize: '16px',
        },
        a: {
          textDecoration: 'none',
        },
      },
    },
  },
});

export default theme;
