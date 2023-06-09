import { ProfileContainer } from "./styles";
// import Avatar from '../../images/avatar.png'
import { Buildings, FolderOpen, GithubLogo, Link, Swap, Users } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import { Modal } from "../Modal";
import { GithubContext } from "../../Context";

interface User {
    nome: string,
    bio: string,
    login: string,
    company: string,
    followers: number,
    avatarUrl: string
}

export function Profile () {
    const {userName} = useContext(GithubContext)

    const [ dataUser, setDataUser] = useState<User>()

    const urlUsers = `https://api.github.com/users/${userName}`

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
    },[userName])

    return (
        <ProfileContainer>
            <img src={dataUser?.avatarUrl} alt="" />
            <div className="about">
                <div className="name_and_link">
                    <h1>{dataUser?.nome}</h1>
                    
                    <a className="githubLink" href={`https://github.com/${userName}`} target="_blank">
                        <Link />
                        <span>
                            GITHUB
                        </span>
                    </a>
                </div>
                <p>{dataUser?.bio}</p>
                <div className="informations">
                    <article>
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
                        null }
                        
                       
                        
                        <div>
                            <Users size={18} weight="fill"/>
                            <span>{`${dataUser?.followers} seguidores`}</span>
                        </div>

                    </article>

                    <Dialog.Root>
                        <Dialog.Trigger asChild >

                            <button className="swap">
                                <Swap size={18} weight="fill"/>
                                <span>Trocar Usuario/Repositório</span>
                            </button>
                        </Dialog.Trigger>
                        
                        <Modal/>
                    </Dialog.Root>
                    
                </div>
            </div>
        </ProfileContainer>
    )
}