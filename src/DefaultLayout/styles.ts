import styled from "styled-components";

export const ContainerLayout = styled.main`
    height: 100vh;

    display:flex;
    flex-direction: column;

    footer{
        
        height: 4rem;
        margin-top: auto;
        padding: 1rem 18rem;
        
        background-color: ${props => props.theme["base-profile"]};
        
        display: flex;
        justify-content: space-between;
        align-items: center;

        a{
            display: flex;
            align-items: center;
            gap: 0.5rem;

            color: ${props => props.theme["base-text"]};
            text-decoration: none;
        }
    }
`