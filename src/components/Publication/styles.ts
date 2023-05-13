import styled from "styled-components";

export const PublicationContainer = styled.section`
    flex: 1;
    min-width: 386px;
    height: 270px;
    cursor: pointer;

    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

    padding: 2rem;
    border-radius: 10px;

    background-color: ${props => props.theme["base-post"]};

    header{
        margin-bottom: 1.25rem;

       display: flex;
       align-items: flex-start;
       justify-content: space-between;
       gap: 1rem; 

       h1{
        font-weight: 700;
        font-size: 1.25rem;
        color: ${props => props.theme["base-title"]};
       }
    }

    div{
        height: 130px;
        overflow: hidden;
    }
`