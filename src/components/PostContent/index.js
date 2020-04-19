import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  h2 {
    margin: ${props => props.theme.spacing(6, 0, 4, 0)};
    font-size: ${props => props.theme.typography.h4.fontSize};
  }
  h3 {
    margin: ${props => props.theme.spacing(5, 0, 3, 0)};
    font-size: ${props => props.theme.typography.h5.fontSize};
  }
  h4 {
    margin: ${props => props.theme.spacing(2, 0)};
    font-size: ${props => props.theme.typography.h6.fontSize};
  }
  a {
    color: ${props => props.theme.palette.primary.main};
    transition: ${props => `opacity 0.2s 0s ${props.theme.transitions.easing.easeInOut}`},
    &:hover {
      opacity: 0.7;
    }
  }
  code {
    background-color: #f6f8fa;
    color: #24292e;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-weight: normal;
  }
  em {
    font-weight: bold;
    font-style: normal;
  }
`;

export const PostContent = ({ html }) => <Wrapper dangerouslySetInnerHTML={{ __html: html }} />;
