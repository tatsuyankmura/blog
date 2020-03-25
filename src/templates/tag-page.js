import React from 'react';
import { graphql } from 'gatsby';
import { Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Layout } from '../components/Layout';
import { Article } from '../components/Article';

const useStyles = makeStyles(theme =>
  createStyles({
    title: {
      margin: theme.spacing(0, 0, 4, 0),
    },
    tagName: {
      fontWeight: theme.typography.fontWeightBold,
    },
  })
);

const TagPage = ({ data, pageContext, location }) => {
  const classes = useStyles();
  const posts = data.allMarkdownRemark.edges;
  const title = `#${pageContext.tagName}の記事は${posts.length}件あります`;

  return (
    <Layout location={location} title={title}>
      <Typography component="p" variant="h5" className={classes.title}>
        <span className={classes.tagName}>#{pageContext.tagName}</span>の記事は{posts.length}件あります
      </Typography>
      {posts.map(({ node }) => (
        <Article key={node.fields.slug} node={node} />
      ))}
    </Layout>
  );
};

export default TagPage;

export const pageQuery = graphql`
  query($tagName: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tagName] } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            description
            tags
          }
        }
      }
    }
  }
`;
