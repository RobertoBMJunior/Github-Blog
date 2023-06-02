import { useEffect, useState } from "react";
import { HeaderPost } from "../../components/HeaderPost";
import { PostContainer } from "./styles";
import {useParams} from 'react-router-dom'

interface Issue {
    title: string
    login: string
    created_at: Date
    comments: number
    body: string
    number: number 
}

export function Post () {
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
    const urlIssue = `https://api.github.com/repos/RobertoBMJunior/Github-Blog/issues/${issueNumber}`


    async function getIssue() {
        const response = await fetch(urlIssue)

        const data = await response.json()
        // const final = '.642Z'
        const createdAt = new Date(data.created_at).getTime() //passando pra  milisegundos
        // const createdAt = new Date(data.created_at.slice(0, data.created_at.length - 1) + final).getTime()

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
    })
    

    return (
        <PostContainer>
            <HeaderPost title={issue?.title} login={issue?.login} created_at={issue?.created_at} comments={issue?.comments} number={issue?.number} />
            <article>
                <div>
                    {issue?.body}
                </div>

            </article>
        </PostContainer>
    )
}