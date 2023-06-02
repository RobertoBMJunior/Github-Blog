import { PublicationContainer } from "./styles";
import { useNavigate } from "react-router-dom"
import { formatDistance} from 'date-fns';
import ptBR from "date-fns/locale/pt-BR";

const dateFormatter = new Intl.DateTimeFormat("pt-BR")

interface PublicationProps {
    title: string
    createdAt: Date
    body: string
    number: number
}

export function Publication({title,createdAt,body,number}:PublicationProps) {
    const timestamp = new Date(createdAt);
    const timeToNow = formatDistance(Date.now(), timestamp, {addSuffix: false, locale: ptBR })

    const navigate = useNavigate()

    function handleViewPost () {
        const url = `/post/${number}`
        // window.location.assign(url)
        return navigate(url)
    }

    return(
        <PublicationContainer onClick={handleViewPost}>
            <header>
                <h1>{title}</h1>
                <span title={`Publicado em ${dateFormatter.format(createdAt)}`}>
                    {`Há ${timeToNow}`}
                </span>
            </header>
            <div>
                <code>
                    {body}
                </code>
            </div>
        </PublicationContainer>
    )
}