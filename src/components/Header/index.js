import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Grid, Container } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(2, 0),
      margin: theme.spacing(0, 0, 6, 0),
    },
    title: {
      fontSize: theme.typography.pxToRem(18),
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.text.primary,
      textDecoration: 'none',
    },
  })
);

export const Header = () => {
  const classes = useStyles();
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <header className={classes.root}>
      <Container maxWidth="md">
        <Grid container>
          <Grid item>
            <Link className={classes.title} to="/">
              {site.siteMetadata.title}
            </Link>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};
