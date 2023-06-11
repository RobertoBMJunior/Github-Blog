import styled from "styled-components";

export const HeaderPostContainer = styled.nav`
    width: 100%;
    min-height: 168px;
    padding: 2rem;
    margin-top: -5.5rem;

    background-color: ${props => props.theme["base-post"]};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;

        &>a{
            display: flex;
            align-items: center;
            gap: 0.4rem;
            color: ${props => props.theme["blue"]};

            text-transform: uppercase;
            text-decoration: none;

            background: transparent;
            border: none;
            cursor: pointer;
        }
    }
    
    h2{
        font-weight: 700;
        font-size: 1.5rem;
        

        margin: 1.25rem 0 0.5rem;
        color: ${props => props.theme["base-title"]};
    }

    .informations{
        display: flex;
        gap: 1.5rem;
        align-items: center;
        flex-wrap: wrap;

        div{
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: ${props => props.theme["base-span"]};

            svg{
                color: ${props => props.theme["base-label"]}
            }
        }
    }

    @media only screen and (max-width: 650px) {
        padding: 2rem 1rem;;

        .informations{
            gap: 0.5rem;
        }
    }

    @media only screen and (max-width: 365px) {
        &>header a{
            font-size: 0.875rem;
        }

        &>h2{
            font-size: 1.25rem;
        }

        .informations{
            gap: 0.5rem;
        }
    }
`