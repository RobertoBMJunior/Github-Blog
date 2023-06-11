import styled from "styled-components";

export const ProfileContainer = styled.div`
    width: 100%;
    // min-height: 212px;
    height: auto;
    padding: 2rem;
    margin-top: -5.5rem;

    background-color: ${props => props.theme["base-post"]};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    display: flex;
    align-items: flex-start;
    gap: 2rem;

    img{
        width: 148px;
        heigth: 148px;
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
            align-items: flex-end;
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
          
        }
    }


    @media only screen and (max-width: 1100px) {
        .informations {
            align-items: flex-end;

            article{
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }

        }
    }

    @media only screen and (max-width: 720px) {
        // height: 270px;

        .about{
            height: auto;
        }

        img{
            width: 90px;
        }

        .informations{
            flex-direction: column;
            align-items: flex-start !important;

            article{
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: flex-start;
            }
        }

        .name_and_link h1{
            font-size: 1rem !important; 
        }
    }    

    @media only screen and (max-width: 600px) {
        // height: 270px;
    }

    @media only screen and (max-width: 530px) {
        padding: 1rem;
        // height: 350px;
        flex-direction: column;
        gap: 0.5rem;

        img{
            align-self: center;
        }

        .about{
            align-items: center;
            height: auto;

            .name_and_link{
                flex-direction: column;
            }

            &>p{
                text-align: center;
            }

            .informations {
                align-items: center !important;

                article{
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: center;
                }
            }
        }

        
        // @media only screen and (max-width: 450px) {
        //     height: 370px;

        // }

        // font-size: 0.85rem;

        // .swap{
        //     font-size: 0.85rem;
        // }
    }
`