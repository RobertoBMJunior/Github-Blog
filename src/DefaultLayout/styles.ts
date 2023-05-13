import styled from "styled-components";

export const ContainerLayout = styled.main`
    height: 100vh;

    footer{

        a{
            display: flex;
            align-items: center;
            gap: 0.5rem;

            color: ${props => props.theme["base-text"]};
            text-decoration: none;
        }

        height: 4rem;
        padding: 0 18rem;

        background-color: ${props => props.theme["base-profile"]};

        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`