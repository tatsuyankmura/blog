import React from 'react';
import { Link } from 'gatsby';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    chip: {
      margin: theme.spacing(0, 0.5),
      color: theme.palette.common.white,
      fontSize: theme.typography.pxToRem(12),
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(0.5, 1),
      borderRadius: theme.spacing(2),
      transition: `opacity 0.2s 0s ${theme.transitions.easing.easeInOut}`,
      '&:hover': {
        opacity: 0.7,
      },
    },
  })
);

export const TagChip = ({ tag }) => {
  const classes = useStyles();
  return (
    <Link className={classes.chip} to={`/tags/${tag}`}>
      #{tag}
    </Link>
  );
};
