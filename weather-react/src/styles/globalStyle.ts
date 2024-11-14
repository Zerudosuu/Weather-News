import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * { 
     box-sizing: border-box;
     margin:0;
     padding: 0;
     color: #1a1a1a;
 }

 h1 {
     font-size: 3rem; /* 48px */
     line-height: 1.2;
     font-weight: 700;
 }

 h2 {
     font-size: 2.5rem; /* 40px */
     line-height: 1.3;
     font-weight: 600;
 }

 h3 {
     font-size: 2rem; /* 32px */
     line-height: 1.4;
     font-weight: 600;
 }

 h4 {
     font-size: 1.5rem; /* 24px */
     line-height: 1.5;
     font-weight: 500;
 }

 h5 {
     font-size: 1.25rem; /* 20px */
     line-height: 1.6;
     font-weight: 500;
 }

 h6 {
     font-size: 1rem; /* 16px */
     line-height: 1.6;
     font-weight: 500;
 }

 body {
     font-size: 1rem; /* 16px */
     line-height: 1.75;
     font-weight: 400;
 }


`;

export default GlobalStyle;
