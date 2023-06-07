import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay)`
    background-color: rgba(18,18,20,.8);
    position: fixed;
    inset: 0;
`

export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    background-color: ${props => props.theme["base-background"]};
    box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.8);
    border-radius: 6px;

    padding: 3rem 3rem 2.5rem;

    position: fixed;
    
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    form{
        margin-top: 1rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        input{
            flex: 1;
            background-color: ${props => props.theme["base-input"]};

            border: 0;
            border-radius: 6px;
            
            padding: 1rem;
        }

        button {
            padding: 1rem 2rem;
            margin-top: 1.5rem;

            border: 0;
            border-radius: 6px;

            background-color: ${props => props.theme["base-border"]};
            color: ${props => props.theme.blue};

            cursor: pointer;
            transition: background-color .2s;

            &:disabled{
                opacity: 0.6;
                cursor: not-allowed;
            }

            &:not(:disabled):hover{
                background-color: ${props => props.theme["base-label"]};
                transition: background-color .2s;
            }
        }


    }

    @media only screen and (max-width: 550px) {
        min-width: 28rem;
        padding: 3rem 1.5rem 2.5rem;
    }

    @media only screen and (max-width: 480px) {
        min-width: 24rem;
    }

    @media only screen and (max-width: 400px) {
        min-width: 22rem;
    }

    @media only screen and (max-width: 365px) {
        min-width: 20rem;
    }

    @media only screen and (max-width: 330px) {
        min-width: 16rem;
    }

`

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    top: 15px;
    right: 15px;

    background-color: transparent;
    border: 0;

    cursor: pointer;
`
export const Title = styled(Dialog.Title)`
    font-size: 1.5rem;
    font-weight: 700;

    color: ${props => props.theme["base-title"]};
`