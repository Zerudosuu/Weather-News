import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   

    :root {
        --primary-color: #242424; /* Replace with your primary color */
        --secondary-color: #ffffff; /* Replace with your secondary color */
        --accent-color: pink; /* Optional for accents */
    }


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Prida', sans-serif;
        overflow-x: hidden;
    }

    h1 {
        font-family: 'Lora', sans-serif;
        font-size: 2rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    h3 {
        font-size: 1.17rem;
    }

    p {
        font-size: 1rem;
    }

    a {
        text-decoration: none;
        color: #fff;
    }

    ul {
        list-style: none;
    }



`;

export default GlobalStyle;
