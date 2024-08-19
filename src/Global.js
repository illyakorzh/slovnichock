import { createGlobalStyle } from 'styled-components';

import authImg from './assets/img/pexels-felix-mittermeier-956981.jpg';

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }

    html, body, #root {
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }

    #root {
        color: white;
        background: #1D1E2A;
            // background-image: url("${authImg}");
        // background-size: cover;
        // background-repeat: no-repeat;
        display: flex;
        justify-content: center;

    }

    a {
        color: inherit;
    }
`;
