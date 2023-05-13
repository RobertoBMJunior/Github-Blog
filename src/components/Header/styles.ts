import styled from "styled-components";

export const HeaderContainer = styled.header`
    padding-bottom: 5rem;

    height: 18.5rem;
    background-color: ${props => props.theme["base-profile"]};

    display: flex;
    justify-content: space-between;
    align-items: center;

    img:first-child, img:last-child{
        margin-bottom:  70px;
    }

`