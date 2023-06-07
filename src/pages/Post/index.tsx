import { useContext, useEffect, useState } from "react";
import { HeaderPost } from "../../components/HeaderPost";
import { PostContainer } from "./styles";
import {useParams} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { GithubContext } from "../../Context";


interface Issue {
    title: string
    login: string
    created_at: Date
    comments: number
    body: string
    number: number 
}

export function Post () {
    const {userName,repo} = useContext(GithubContext)

    const {issueNumber} = useParams()
    const [ issue, setIssue] = useState<Issue>({
        title: '',
        login: '',
        created_at: new Date(),
        comments: 0,
        body: '',
        number: 0,
    })

    //Pesquisando pelo número da issue
    // const urlIssue = `https://api.github.com/repos/RobertoBMJunior/Github-Blog/issues/${issueNumber}`
    const urlIssue = `https://api.github.com/repos/${userName}/${repo}/issues/${issueNumber}`


    async function getIssue() {
        const response = await fetch(urlIssue)

        const data = await response.json()
        
        const createdAt = new Date(data.created_at).getTime() //passando pra  milisegundos

        const date = new Date(createdAt)

        const viewIssue = {
            title: data.title,
            login: data.user.login,
            created_at: date,
            comments: data.comments,
            body: data.body,
            number: data.number
        } 

        setIssue(viewIssue)

    }

    useEffect(()=> {
        getIssue()
    },[userName,repo])
    

    return (
        <PostContainer>
            <HeaderPost title={issue?.title} login={issue?.login} created_at={issue?.created_at} comments={issue?.comments} number={issue?.number} />
            <article>
                <div>
                    {/* {issue?.body} */}
                    <ReactMarkdown>{issue.body}</ReactMarkdown>
                </div>

            </article>
        </PostContainer>
    )
}