import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
        margin: 0;
        padding: 0;
        font-size: 10px;
    }
    body {
        margin: 0;
        padding: 0;
        font-size: 1.6rem;
        font-family: Arial;
    }

    * {
        max-width: 100%;
    }

`;