import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, Title } from './styles';
import { X } from '@phosphor-icons/react';


import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { useContext, useRef } from 'react';
import { GithubContext } from '../../Context';

const searchFormSchema = z.object({
    user: z.string(),
    repo: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Modal() {
    const {setUserName,setRepo} = useContext(GithubContext)

    const { 
        register, 
        handleSubmit,
        reset,
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    const buttonRef = useRef()

    function handleNewUser ( data: SearchFormInputs) {
        setUserName(data.user)
        setRepo(data.repo)
        reset()

        buttonRef.current.click()
    }

    

    return (
        <Dialog.Portal>
            <Overlay/>
            <Content>
                <CloseButton  asChild  ref={buttonRef}>
                    <button >
                        <X size={24}/>
                    </button>
                </CloseButton>
                <Title>Trocar Usuário/Repositório</Title>
                <Dialog.Description>
                    Insira o nome de algum usuário do Github e o nome do repositório para visualisar as issues.
                </Dialog.Description>
                <form action="" onSubmit={handleSubmit(handleNewUser)}>
                        <input type="text" placeholder="Nome do usuário Github" {...register("user")}/>
                        <input type="text" placeholder="Nome do repositório." {...register("repo")}/>
                        <button>Buscar</button>
                
                </form>
                

            </Content>
        </Dialog.Portal>
    )
}