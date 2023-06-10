import styled from "styled-components";

export const HomeContainer = styled.article`
    padding: 0 18rem 3rem;

    form{
        margin: 4.5em 0 1.5rem;

        &>div{
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.75rem;

            span:first-child{
                font-weight: 700;
                font-size: 1.125rem;
                color: ${props => props.theme["base-subtitile"]};
            }

            span:last-child{
                color: ${props => props.theme["base-span"]};
            }
        }

        input{
            width: 100%;
            padding: 0.75rem 1rem;
            border-radius: 6px;
            background-color: ${props => props.theme["base-input"]};
            color: ${props => props.theme["blue"]};

            border: 1px solid ${props => props.theme["base-border"]};
        }

        .repo{
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: ${props => props.theme["base-subtitile"]}
    
            svg{
                color: ${props => props.theme["base-label"]}
            }
        }

        &>footer{
            background-color: transparent;
            text-align: left;
            padding: 0;

            margin-top: 0.75rem;
        }
    }

    article{
        display: flex;
        gap: 2rem;

        flex-wrap: wrap;

        h2{
            width: 100%;
            text-align: center;
        }
    }

    @media only screen and (max-width: 1550px) {
        padding: 0 10rem 3rem;
    }

    @media only screen and (max-width: 1260px) {
        padding: 0 5rem 3rem;
    }

    @media only screen and (max-width: 1100px) {
        padding: 0 2rem 3rem;
    }

    @media only screen and (max-width: 530px) {
        &>form footer{
            margin: 2rem 0;
        }
    }

    @media only screen and (max-width: 450px) {
        padding: 0 1rem 3rem;
    }
`