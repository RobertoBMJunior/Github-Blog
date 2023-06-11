import styled from "styled-components";

export const PostContainer = styled.article`
    padding: 0 18rem 3rem;

    article{
        padding: 2.5rem 2rem;
        overflow: hidden;

        img{
            width: 400px;
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

    @media only screen and (max-width: 550px) {
        article img{
            width: 280px;
        }
    }

    @media only screen and (max-width: 450px) {
        padding: 0 1rem 3rem;
    }

    @media only screen and (max-width: 360px) {
        article img{
            width: 200px;
        }
    }
`