import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Overlay = styled(Dialog.Overlay)`
    background-color: rgba(18,18,20,.8);
    position: fixed;
    inset: 0;
`

export const Content = styled(Dialog.Content)`
    width: 32rem;
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

        .query{
            display: flex;
            gap: 0.5rem;
            
            input{
                flex: 1;
                background-color: ${props => props.theme["base-input"]};
    
                border: 0;
                border-radius: 6px;
                
                padding: 1rem;
            }
    
            &>button {
                padding: 1rem 1rem;
                // margin-top: 1.5rem;
    
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

    }


    .userRepo{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;

        .profile{
            display: flex;
            gap: 0.5rem;
            align-items: center;

            img{
                width: 50px;
                border-radius: 100%;;
            }
        }

        .scrollArea {
            width: 300px;
            height: 225px;
            border-radius: 4px;
            overflow-y: auto;
            background-color: transparent;

            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            padding: 1rem;
            text-align: center;
            align-self: center;

            span{
                border-top: 1px solid ${props => props.theme["base-label"]};
                
            }
        }

        &>footer{
            width: 100%;
            font-size: 0.875rem;
        }
    }



    @media only screen and (max-width: 550px) {
        width: 28rem;
        padding: 3rem 1.5rem 2.5rem;
    }

    @media only screen and (max-width: 480px) {
        width: 24rem;
    }

    @media only screen and (max-width: 400px) {
        width: 22rem;
        padding: 2rem 1rem 2rem;

        .query input{
            padding: 0.6rem !important;
        }

        .description{
            display: none;
        }

        .userRepo h3 {
            font-size: 1rem;
        }
    }

    @media only screen and (max-width: 365px) {
        width: 20rem;

        .query{
            flex-direction: column;

            button{
                padding: 0.5rem !important;
            }
        }

        .scrollArea {
            width: 250px;
            align-items: center;
        }
    }

    @media only screen and (max-width: 330px) {
        width: 16rem;
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

    @media only screen and (max-width: 400px) {
        font-size: 1.1rem;
    }
`

export const RepoOptions = styled(RadioGroup.Item)`
    background-color: white;
    width: 25px;
    height: 25px;
    border-radius: 100%;

    &:hover{
        background-color: ${props => props.theme["base-profile"]};
    }

    &[data-state="checked"] {
        background-color: ${props => props.theme["blue"]};
        border: 1px solid ${props => props.theme["base-border"]};
    }

    .RadioGroupIndicator {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        position: relative;
      }
      .RadioGroupIndicator::after {
        content: '';
        display: block;
        width: 11px;
        height: 11px;
        border-radius: 50%;
      }
`