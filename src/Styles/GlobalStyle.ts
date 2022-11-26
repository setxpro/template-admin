import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,body {
        font-size: calc(60% + .8vmin);
        font-family: 'Montserrat', sans-serif;

        background: #171E31;
    }

    :root {
        --color-cart: #7367F0;
        --color-notify: #EA5455;
    }
`;