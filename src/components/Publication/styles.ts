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

        code{
            display: flex;
            flex-direction: column;
        }
    }

    @media only screen and (max-width: 450px) {
        padding: 1.5rem;
        font-size: 0.9rem;

        min-width: 300px;
        flex: 0;

        &>header h1{
            font-size: 1rem;
        }
    }

    @media only screen and (max-width: 320px) {
        min-width: 260px;
    }
`