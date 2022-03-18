import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import App from './App.tsx';
import { ThemeProvider } from "styled-components"
import { createGlobalStyle } from 'styled-components';
import { darkTheme } from './theme.ts';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'LeeSeoyun';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/LeeSeoyun.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  *{
    margin: 0;
    padding: 0;
    font-family: "LeeSeoyun";
    list-style: none;
  }
  body{
    background-color:${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
`

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle/>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
