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

    @media only screen and (max-width: 1100px) {
        img:first-child, img:last-child{
            width: 200px;
        }   
    }

    @media only screen and (max-width: 600px) {
        justify-content: center;

        img:nth-child(2) {
            width: 90px;
        }

        img:first-child, img:last-child{
            width: 150px;
        }
    }

    @media only screen and (max-width: 400px) {
        justify-content: center;

        img:nth-child(2) {
            width: 80px;
        }

        img:first-child, img:last-child{
            width: 100px;
        }
    }

`