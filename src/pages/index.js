import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { Article } from '../components/Article';

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      {posts.map(({ node }) => (
        <Article key={node.fields.slug} node={node} />
      ))}
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
