// 글로벌 스타일 담당자: 이동건 

import { createGlobalStyle } from "styled-components";


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


* {
    box-sizing: border-box;
    /* overflow-x: hidden; */
    /* max-width: 100%; */
    //반응형할때 가로 스크롤 없애는 코드 모바일화면할때 수정해야될수있음 
    /* overflow-y: hidden; */
    
}

/* *::selection {
    color: black;
    background: #daa520;
} */
html, body, #root {
    width: 100%;
    height: 100%;
    background-color: #FAFAFC;
}
body {
    
    
}
@font-face {
    font-family: 'SUIT';
    font-weight: 100;
    font-style: normal;
    src: url('./assets/font/SUIT-Thin.ttf') format('ttf')
}
@font-face {
    font-family: 'SUIT';
    font-weight: 200;
    font-style: normal;
    src: url('./assets/font/SUIT-ExtraLight.ttf') format('ttf')
}
@font-face {
    font-family: 'SUIT';
    font-weight: 300;
    font-style: normal;
    src: url('./assets/font/SUIT-Light.ttf') format('ttf')
}
@font-face {
    font-family: 'SUIT';
    font-weight: 400;
    font-style: normal;
    src: url('./assets/font/SUIT-Regular.ttf') format('ttf')
}
@font-face {
    font-family: 'SUIT';
    font-weight: 500;
    font-style: normal;
    src: url('./assets/font/SUIT-Medium.ttf') format('ttf')
}
@font-face {
    font-family: 'SUIT';
    font-weight: 600;
    font-style: normal;
    src: url('./assets/font/SUIT-SemiBold.ttf') format('ttf')
}
@font-face {
    font-family: 'SUIT';
    font-weight: 700;
    font-style: normal;
    src: url('./assets/font/SUIT-Bold.ttf') format('ttf')
}
@font-face {
    font-family: 'SUIT';
    font-weight: 800;
    font-style: normal;
    src: url('./assets/font/SUIT-ExtraBold.ttf') format('ttf')

}
@font-face {
    font-family: 'SUIT';
    font-weight: 900;
    font-style: normal;
    src: url('./assets/font/SUIT-Heavy.ttf') format('ttf')
}



`;

