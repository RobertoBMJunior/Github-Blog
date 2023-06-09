import { useContext } from "react";
import { ButtonRepoContainer } from "./styles";
import { GithubContext } from "../../Context";

interface ButtonRepoProps {
    repo: string
    userName: string
    closeModal: () => void
}

export function ButtonRepo ({repo, userName, closeModal}:ButtonRepoProps) {

    const {setUserName,setRepo} = useContext(GithubContext)
    
    function handleRepository() {
        setUserName(userName)
        setRepo(repo)

        closeModal()
    }
    
    return (
        <ButtonRepoContainer onClick={handleRepository}>
            {repo}
        </ButtonRepoContainer>
    )
}