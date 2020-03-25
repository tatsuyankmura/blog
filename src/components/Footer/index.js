import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      textAlign: 'center',
      margin: theme.spacing(12, 0, 0, 0),
      padding: theme.spacing(0, 0, 3, 0),
    },
    social: {
      listStyle: 'none',
      padding: 0,
    },
    link: {
      color: theme.palette.grey[700],
    },
    copy: {
      color: theme.palette.grey[700],
      fontSize: theme.typography.pxToRem(12),
    },
  })
);

export const Footer = () => {
  const classes = useStyles();
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            social {
              twitter
              github
            }
          }
        }
      }
    `
  );
  const { title, social } = site.siteMetadata;
  const { twitter, github } = social;

  return (
    <footer className={classes.root}>
      <Grid container justify="center" spacing={2}>
        <Grid item>
          <a href={twitter} target="_blank" rel="noopener noreferrer" className={classes.link}>
            <TwitterIcon />
          </a>
        </Grid>
        <Grid item>
          <a href={github} target="_blank" rel="noopener noreferrer" className={classes.link}>
            <GitHubIcon />
          </a>
        </Grid>
      </Grid>
      <Typography component="small" className={classes.copy}>
        © 2020. {title}.
      </Typography>
    </footer>
  );
};
