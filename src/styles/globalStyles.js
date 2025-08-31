import { css } from '@emotion/react';

export const GlobalStyles = {
  html: {
    boxSizing: 'border-box',
    scrollBehavior: 'smooth'
  },
  body: {
    minHeight: '100vh',
    margin: 0,
    fontFamily: "'Inter', sans-serif",
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: '1.2'
  },
  'h1,h2,h3,h4,h5,h6,p': {
    margin: '0',
    padding: '0'
  },
  'ul,ol': {
    listStyle: 'none',
    paddingLeft: '0',
    margin: '0'
  },
  img: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto'
  },
  button: {
    padding: '0',
    border: 'none',
    font: 'inherit',
    color: 'inherit',
    backgroundColor: 'transparent',
    cursor: 'pointer'
  },
  a: {
    textDecoration: 'none',
    color: 'inherit'
  },
  code: {
    fontFamily:
      "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace,"
  }
};

export const GlobalStylesTmp = css`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-size: 16px;
    line-height: 1.2;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
