import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import { PostHeader } from '../components/PostHeader';
import { PostContent } from '../components/PostContent';
import { PostPaging } from '../components/PostPaging';
import { PostShare } from '../components/PostShare';

const BlogPost = ({ data, pageContext, location }) => {
  const { site, markdownRemark } = data;
  const { title: siteTitle } = site.siteMetadata;
  const post = markdownRemark;
  const { title, date, tags, description } = post.frontmatter;

  return (
    <Layout location={location} title={title} description={description || post.excerpt}>
      <article>
        <PostHeader title={title} date={date} tags={tags} />
        <PostContent html={post.html} />
      </article>
      <PostShare url={location.href} title={title} siteTitle={siteTitle} />
      {(pageContext.next || pageContext.prev) && <PostPaging pageContext={pageContext} />}
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date
        description
        tags
      }
    }
  }
`;
