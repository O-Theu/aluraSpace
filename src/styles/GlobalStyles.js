import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        min-height: 100vh;
        background-image: linear-gradient(#041833, #154580);
        box-sizing: border-box;
    }

    body::-webkit-scrollbar {
        width: 3px;
    }
    body::-webkit-scrollbar-track {
        background: linear-gradient(#041833, #154580);
    }
    body::-webkit-scrollbar-thumb {
        background-color: #555;
        border-radius: 20px;
    }
`; 

