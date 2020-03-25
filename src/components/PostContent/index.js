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
    border: ${props => `1px solid ${props.theme.palette.common.black}`};
    background-color: #373949;
    color: ${props => props.theme.palette.common.white};
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  }
`;

export const PostContent = ({ html }) => <Wrapper dangerouslySetInnerHTML={{ __html: html }} />;
