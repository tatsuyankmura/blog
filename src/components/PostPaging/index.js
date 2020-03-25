import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      margin: theme.spacing(6, 0, 0, 0),
    },
    link: {
      color: theme.palette.text.primary,
      display: 'flex',
      alignItems: 'center',
      transition: `color 0.2s 0s ${theme.transitions.easing.easeInOut}`,
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
    icon: {
      width: theme.typography.pxToRem(14),
    },
  })
);

export const PostPaging = ({ pageContext }) => {
  const classes = useStyles();
  const { previous, next } = pageContext;

  return (
    <nav>
      <Grid container justify="space-between" alignItems="center" className={classes.root}>
        <Grid item>
          {previous && (
            <Link to={previous.fields.slug} className={classes.link} rel="prev">
              <ArrowBackIos className={classes.icon} />
              {previous.frontmatter.title}
            </Link>
          )}
        </Grid>
        <Grid item>
          {next && (
            <Link to={next.fields.slug} className={classes.link} rel="next">
              {next.frontmatter.title}
              <ArrowForwardIos className={classes.icon} />
            </Link>
          )}
        </Grid>
      </Grid>
    </nav>
  );
};
