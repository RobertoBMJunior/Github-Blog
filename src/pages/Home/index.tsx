import { Profile } from "../../components/Profile";
import { Publication } from "../../components/Publication";
import { HomeContainer } from "./styles";

export function Home () {

    // const urlGithub = 'https://api.github.com'

    // const user = '/users/robertobmjunior'

    // const search = '/search/issues?q='
    // const repo = 'repo:RobertoBMJunior/Github-Blog'
    // const texto = 'Uchiha Madara'
    
    // const issues = '/repos/RobertoBMJunior/Github-Blog/issues/1'

    // fetch(urlGithub + user).then(response => response.json())
    // .then(data => console.log(data))

    // fetch(urlGithub + search + texto + repo).then(response => response.json())
    // .then(data => console.log(data))

    // fetch(urlGithub + issues).then(response => response.json())
    // .then(data => console.log(data))



    return (
        <HomeContainer>
            <Profile/>
            <form action="">
                <div>
                    <span>Publicações</span>
                    <span>6 publicações</span>
                </div>
                <input type="text" placeholder="Buscar conteúdo"/>
            </form>
            <article>
                <Publication/>
                <Publication/>
                <Publication/>
             

            </article>
        </HomeContainer>
    )
}