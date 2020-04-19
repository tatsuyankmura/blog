import React from 'react';
import { Link, Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  PocketShareButton,
  PocketIcon,
} from 'react-share';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      margin: theme.spacing(10, 0),
    },
    hagebu: {
      textAlign: 'center',
      textDecoration: 'none',
      display: 'block',
      width: '40px',
      height: '40px',
      lineHeight: '40px',
      color: '#fff',
      background: 'linear-gradient(#00a5e0 0%, #00a5e0 50%, #008de1 50%, #008de1 100%)',
      borderRadius: '50%',
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.pxToRem(16),
      '&:hover': {
        textDecoration: 'none',
      },
    },
  })
);

export const PostShare = ({ url, title, siteTitle }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} justify="center" className={classes.root}>
      <Grid item>
        <FacebookShareButton url={url}>
          <FacebookIcon size={40} round />
        </FacebookShareButton>
      </Grid>
      <Grid item>
        <TwitterShareButton url={url} title={`${title} | ${siteTitle}`}>
          <TwitterIcon size={40} round />
        </TwitterShareButton>
      </Grid>
      <Grid item>
        <Link
          className={classes.hagebu}
          href={`http://b.hatena.ne.jp/add?mode=confirm&url=${url}&title=${title} | ${siteTitle}`}
          target="_blank"
          rel="nofollow"
        >
          B!
        </Link>
      </Grid>
      <Grid item>
        <PocketShareButton url={url}>
          <PocketIcon size={40} round />
        </PocketShareButton>
      </Grid>
    </Grid>
  );
};
