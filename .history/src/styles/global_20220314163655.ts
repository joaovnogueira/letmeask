import {createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${props => props.theme.colors.background};
        color: ${props => }
    }

    body, input, button, textarea{
    font: 400 16px 'Roboto', sans-serif;
}
`;