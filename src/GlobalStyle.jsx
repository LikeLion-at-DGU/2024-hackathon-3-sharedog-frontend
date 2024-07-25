import { createGlobalStyle } from "styled-components";
// import AppleSDGothicNeoL from "./assets/fonts/AppleSDGothicNeoL.ttf";
// import AppleSDGothicNeoB from "./assets/fonts/AppleSDGothicNeoB.ttf";
// import AppleSDGothicNeoM from "./assets/fonts/AppleSDGothicNeoM.ttf";

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
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
footer, header, hgroup, main, menu, nav, section {
    display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
    line-height: 1;
}
menu, ol, ul {
    list-style: none;
    padding-left: 0;
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
/* @font-face {
    font-family: "AppleSDGothicNeoL";
    src: url(${AppleSDGothicNeoL});
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: "AppleSDGothicNeoM";
    src: url(${AppleSDGothicNeoM});
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: "AppleSDGothicNeoB";
    src: url(${AppleSDGothicNeoB});
    font-weight: normal;
    font-style: normal;
} */

* {
    box-sizing: border-box;
    /* overflow-x: hidden; */
    /* max-width: 100%; */
    //반응형할때 가로 스크롤 없애는 코드 모바일화면할때 수정해야될수있음 
}

/* *::selection {
    color: black;
    background: #daa520;
} */

body {
    /* font-family: "AppleSDGothicNeoM"; */
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
}

`;
