import styled from "styled-components";

export const ButtonRepoContainer = styled.button`
    padding: 0.5rem;
    cursor: pointer;

    background-color: ${props => props.theme["base-input"]};
    border: 1px solid ${props => props.theme["base-border"]}; 
    border-radius: 8px;

    &:hover{
        background-color: ${props => props.theme["base-border"]} 
    }

    
`