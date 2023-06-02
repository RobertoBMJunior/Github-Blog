import { useEffect, useState } from "react";
import { Profile } from "../../components/Profile";
import { Publication } from "../../components/Publication";
import { HomeContainer } from "./styles";


interface SearchIssues {
    title: string
    created_at: Date
    body: string
    number: number
}

export function Home () {
    const [ search, setSearch] = useState<SearchIssues[]>([])

    //Pesquisando por vazio para vir tudo
    const urlSearch = 'https://api.github.com/search/issues?q=%20repo:RobertoBMJunior/Github-Blog' 


    async function getSearch() {
        const response = await fetch(urlSearch)

        const data = await response.json()

        setSearch(data.items)

    }

    useEffect(()=> {
        getSearch()
    },[])



    return (
        <HomeContainer>
            <Profile/>
            <form action="">
                <div>
                    <span>Publicações</span>
                    <span>{`${search.length} publicações`}</span>
                </div>
                <input type="text" placeholder="Buscar conteúdo"/>
            </form>
            <article>
                {search.map(issue => {
                    const title = issue.title
                    
                    const createdAt = new Date(issue.created_at).getTime() //passando pra  milisegundos
                    const date = new Date(createdAt)


                    const body = issue.body
                    const number = issue.number

                    return (
                        <Publication key={number} title={title} createdAt={date} body={body} number={number}/>
                    )
                })}         

            </article>
        </HomeContainer>
    )
}