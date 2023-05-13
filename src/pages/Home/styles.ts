import styled from "styled-components";

export const HomeContainer = styled.div`
    padding: 0 18rem;

    form{
        margin-top: 4.5em;

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
                color: ${props => props.theme["base-span"]}
            }
        }

        input{
            width: 100%;
            padding: 0.75rem 1rem;
            border-radius: 6px;
            background-color: ${props => props.theme["base-input"]};

            border: 1px solid ${props => props.theme["base-border"]};
        }
    }
`