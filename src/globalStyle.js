import { injectGlobal } from "styled-components"
import CarraraBoldWoff2 from "./library/fonts/carrara-bol-webfont.woff2"
import CarraraBoldWoff from "./library/fonts/carrara-bol-webfont.woff"
export const globalStyle = injectGlobal`

  @font-face {
      font-family: 'carrara-bol';
      src: url('${CarraraBoldWoff2}') format('woff2'), url('${CarraraBoldWoff}') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html, body, .viewport {
    width: 100%;
    height: 100%;
    margin: 0;
    background: #f8fbfc;
  }

  body {
    line-height: 1;
  }

  b {
    font-weight: 500;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body,
  html {
    height: 100%;
  }

  body {
    font-family: 'Rubik', 'carrara-bol';
  }

  div,
  a,
  button {
    outline: 0 !important;
  }


  h1, h2, h3, h4, h5, h6 {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 24px;
  }

  p {
    margin:  0 0 10px;
    line-height: 1.4;
  }

  a, li { 
    outline: 0 !important;
  }
`
