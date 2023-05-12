import { createGlobalStyle } from "styled-components";

export const GloBalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
    }

    body{
        background: ${props => props.theme["base-background"]};
    }

    body, input, button{
        font-family: 'Nunito', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.6;    

        color: ${props => props.theme['base-text']}
    }
    `