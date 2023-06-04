import { ProfileContainer } from "./styles";
// import Avatar from '../../images/avatar.png'
import { Buildings, GithubLogo, Link, Swap, Users } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

interface User {
    nome: string,
    bio: string,
    login: string,
    company: string,
    followers: number,
    avatarUrl: string
}

export function Profile () {
    const [ dataUser, setDataUser] = useState<User>()

    const urlUsers = 'https://api.github.com/users/robertobmjunior'

    async function getData() {
        const response = await fetch(urlUsers)

        const data = await response.json()

        const dados = {
            nome: data.name,
            bio: data.bio,
            login: data.login,
            company: data.company,
            followers: data.followers,
            avatarUrl: data.avatar_url,
        }

        setDataUser(dados)
    }

    useEffect(()=> {
        getData()
    },[])

    return (
        <ProfileContainer>
            <img src={dataUser?.avatarUrl} alt="" />
            <div className="about">
                <div className="name_and_link">
                    <h1>{dataUser?.nome}</h1>
                    
                    <a className="githubLink" href="https://github.com/RobertoBMJunior/Github-Blog" target="_blank">
                        <Link />
                        <span>
                            GITHUB
                        </span>
                    </a>
                </div>
                <p>{dataUser?.bio}</p>
                <div className="informations">
                    <div>
                        <GithubLogo size={18} weight="fill"/>
                        <span>{dataUser?.login}</span>
                    </div>
                    {dataUser?.company 
                        ? 
                        <div>
                            <Buildings size={18} weight="fill"/>
                            <span>{dataUser?.company}</span>
                        </div> 
                        : 
                        null 
                    }
                    
                    <div>
                        <Users size={18} weight="fill"/>
                        <span>{`${dataUser?.followers} seguidores`}</span>
                    </div>

                    <div>
                        <Swap size={18} weight="fill"/>
                        <span>Trocar Usuario/Repositório</span>
                    </div>
                </div>
            </div>
        </ProfileContainer>
    )
}