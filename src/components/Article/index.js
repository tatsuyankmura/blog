import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby-theme-material-ui';
import { TagChip } from '../TagChip';

const useStyles = makeStyles(theme =>
  createStyles({
    article: {
      marginBottom: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      borderBottom: `1px solid ${theme.palette.border}`,
    },
    title: {
      fontSize: theme.typography.h4.fontSize,
      fontWeight: theme.typography.fontWeightBold,
      transition: `opacity 0.2s 0s ${theme.transitions.easing.easeInOut}`,
      '&:hover': {
        opacity: 0.7,
      },
    },
    link: {
      '&:hover': {
        textDecoration: 'none',
      },
    },
    description: {
      margin: theme.spacing(0, 0, 2, 0),
    },
  })
);

export const Article = ({ node }) => {
  const classes = useStyles();
  const { slug } = node.fields;
  const { title, description, date, tags } = node.frontmatter;

  return (
    <article className={classes.article}>
      <Typography component="h2" variant="h6" className={classes.title} gutterBottom>
        <Link className={classes.link} to={slug}>
          {title}
        </Link>
      </Typography>
      <Typography component="p" variant="body1" className={classes.description}>
        {description}
      </Typography>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography component="time" variant="body2">
            {date}
          </Typography>
        </Grid>
        <Grid item>{tags.length && tags.map((tag, index) => <TagChip tag={tag} key={index} />)}</Grid>
      </Grid>
    </article>
  );
};
