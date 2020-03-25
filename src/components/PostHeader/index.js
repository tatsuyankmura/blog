import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { TagChip } from '../TagChip';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      margin: theme.spacing(0, 0, 6, 0),
    },
    date: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:before': {
        content: "''",
        display: 'inline-block',
        width: theme.spacing(4),
        height: '1px',
        backgroundColor: theme.palette.primary.main,
        margin: theme.spacing(0, 2),
      },
      '&:after': {
        content: "''",
        display: 'inline-block',
        width: theme.spacing(4),
        height: '1px',
        backgroundColor: theme.palette.primary.main,
        margin: theme.spacing(0, 2),
      },
    },
    title: {
      fontWeight: theme.typography.fontWeightMedium,
      margin: theme.spacing(2, 0),
      textAlign: 'center',
    },
  })
);

export const PostHeader = ({ title, date, tags }) => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <Typography className={classes.date} component="time">
        {date}
      </Typography>
      <Typography component="h1" className={classes.title} variant="h4">
        {title}
      </Typography>
      <Grid container justify="center">
        <Grid item>{tags.length && tags.map((tag, index) => <TagChip tag={tag} key={index} />)}</Grid>
      </Grid>
    </header>
  );
};
