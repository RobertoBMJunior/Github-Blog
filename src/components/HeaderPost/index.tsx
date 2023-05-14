import { ArrowCircleUpRight, CaretLeft, ChatCircleDots, GithubLogo, Watch } from "@phosphor-icons/react";
import { HeaderPostContainer } from "./styles";

export function HeaderPost () {
    return(
        <HeaderPostContainer>
            <header>
                <button>
                    <CaretLeft size={18} weight="fill"/>
                    <span>Voltar</span>
                </button>
                <a href="https://github.com/RobertoBMJunior/Github-Blog">
                    <span>Ver no github</span>
                    <ArrowCircleUpRight size={18} weight="fill"/>
                </a>
            </header>

            <h2>
                JavaScript data types and data structures
            </h2>

            <div className="informations">
                <div>
                    <GithubLogo size={18} weight="fill"/>
                    <span>cameronwll</span>
                </div>
                <div>
                    <Watch size={18} weight="fill"/>
                    <span>Há 1 dia</span>
                </div>
                <div>
                    <ChatCircleDots size={18} weight="fill"/>
                    <span>5 comentários</span>
                </div>
            </div>
        </HeaderPostContainer>
    )
}