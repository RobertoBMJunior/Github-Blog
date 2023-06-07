import styled from "styled-components";

export const ProfileContainer = styled.div`
    width: 100%;
    min-height: 212px;
    padding: 2rem;
    margin-top: -5.5rem;

    background-color: ${props => props.theme["base-post"]};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    display: flex;
    gap: 2rem;

    img{
        width: 148px;
        border-radius: 8px;
    }

    .about{
        width: 100%;
        height: 148px;
        display: flex;
        flex-direction: column;

        .name_and_link{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            h1{
                font-weight: 700;
                font-size: 1.5rem;
                line-height: 130%;
                color: ${props => props.theme["base-title"]}
    
            }
    
            .githubLink{
                display: flex;
                align-items: center;
                gap: 0.5rem;

                color: ${props => props.theme["blue"]};
                text-decoration: none;
            }
        }


        p{
            margin: 0.5rem 0 0;
        }
        
        .informations {
            display: flex;
            justify-content: space-between;
            gap: 1rem;
            align-items: center;
            margin-top: auto;
    
            div{
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: ${props => props.theme["base-subtitile"]}
    
                svg{
                    color: ${props => props.theme["base-label"]}
                }
            }

            //-----------------------------------------------------------------------

            .swap{
                display: flex;
                align-items: center;
                gap: 0.5rem;

                color: ${props => props.theme["blue"]};
                text-decoration: none;
                background: none;
                border: none;
                cursor: pointer;
            }


            
            form{
                display: flex;
                flex-direction: column;
                margin-top: -2rem;

                input{
                    wdith: 400px;
                    color: ${props => props.theme["base-text"]};
                }

                button{
                    color: ${props => props.theme["blue"]};
                }
            }
          
        }
    }

`