import { useContext, useEffect, useState } from "react";
import { Profile } from "../../components/Profile";
import { Publication } from "../../components/Publication";
import { HomeContainer } from "./styles";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { GithubContext } from "../../Context";
import { FolderOpen } from "@phosphor-icons/react";

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>


interface SearchIssues {
    title: string
    created_at: Date
    body: string
    number: number
}

export function Home () {
    const {userName,repo} = useContext(GithubContext)
    const [ search, setSearch] = useState<SearchIssues[]>([])

    const { 
        register, 
        handleSubmit,
        reset,
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

   


    async function getSearch( query : string ) {
         //Na pimeira renderização o query é uma string vazia
        // const urlSearch = `https://api.github.com/search/issues?q=${query}repo:RobertoBMJunior/Github-Blog`
        const urlSearch = `https://api.github.com/search/issues?q=${query}repo:${userName}/${repo}`


        const response = await fetch(urlSearch)

        const data = await response.json()

        setSearch(data.items)

        reset()
    }

    useEffect(()=> {
        getSearch('')
    },[userName,repo])


    async function handleSearchIssue (data: SearchFormInputs) {
        getSearch(data.query)
    }

    return (
        <HomeContainer>
            <Profile/>
            <form action="" onSubmit={handleSubmit(handleSearchIssue)}>
                <div>
                    {/* <span>Publicações</span> */}
                    <div className="repo">
                        <FolderOpen size={18} weight="fill"/>
                        <span>{repo}</span>
                    </div>
                    <span>{`${search.length == null || search.length == undefined ? 0 : search.length} issues`}</span>
                </div>
                <input type="text" placeholder="Buscar conteúdo" {...register("query")}/>
            </form>
            <article>
                {search.length !== 0 ?
                    search.map(issue => {
                        const title = issue.title
                        
                        const createdAt = new Date(issue.created_at).getTime() //passando pra  milisegundos
                        const date = new Date(createdAt)


                        const body = issue.body
                        const number = issue.number

                        return (
                            <Publication key={number} title={title} createdAt={date} body={body} number={number}/>
                        )
                    })
                    :
                    <h2>Este repositório não possui issues! </h2>
                
                }         

            </article>
        </HomeContainer>
    )
}