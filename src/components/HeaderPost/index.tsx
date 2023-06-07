import { ArrowCircleUpRight, CaretLeft, ChatCircleDots, GithubLogo, Watch } from "@phosphor-icons/react";
import { HeaderPostContainer } from "./styles";
import {NavLink} from 'react-router-dom'
import { formatDistance} from 'date-fns';
import ptBR from "date-fns/locale/pt-BR";
import { useContext } from "react";
import { GithubContext } from "../../Context";


interface HeaderPostProps {
    title: string
    login: string
    created_at: Date
    comments: number
    number: number
}

const dateFormatter = new Intl.DateTimeFormat("pt-BR")

export function HeaderPost ({title,login,created_at,comments,number}:HeaderPostProps) {
    const {userName,repo} = useContext(GithubContext)

    const timestamp = new Date(created_at);
    const timeToNow = formatDistance(Date.now(), timestamp, {addSuffix: false, locale: ptBR })

    return(
        <HeaderPostContainer>
            <header>
                <NavLink to='/'>
                    <CaretLeft size={18} weight="fill"/>
                    <span>Voltar</span>
                </NavLink>
                <a href={`https://github.com/${userName}/${repo}/issues/${number}`} target="_blank">
                    <span>Ver no github</span>
                    <ArrowCircleUpRight size={18} weight="fill"/>
                </a>
            </header>

            <h2>
                {title}
            </h2>

            <div className="informations">
                <div>
                    <GithubLogo size={18} weight="fill"/>
                    <span>{login}</span>
                </div>
                <div>
                    <Watch size={18} weight="fill"/>
                    <span title={`Publicado em ${dateFormatter.format(created_at)}`}>
                        {/* {dateFormatter.format(created_at)} */}
                        {`Há ${timeToNow}`}
                    </span>
                </div>
                <div>
                    <ChatCircleDots size={18} weight="fill"/>
                    <span>{`${comments} comentários`}</span>
                </div>
            </div>
        </HeaderPostContainer>
    )
}