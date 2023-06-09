import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, Title } from './styles';
import { X } from '@phosphor-icons/react';
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { useRef, useState } from 'react';
import { ButtonRepo } from '../ButtonRepo';

const searchFormSchema = z.object({
    user: z.string(),
    // repo: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

interface UserRepo {
    avatar_url: string
    name: string
    reposit: string[]
}

export function Modal() {
    // const {userName} = useContext(GithubContext)
    const [userRepo, setUserRepo] = useState<UserRepo>({
        avatar_url: '',
        name: '',
        reposit: []
    })

    const { 
        register, 
        handleSubmit,
        reset,
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    const buttonRef = useRef()

    function closeModal () {
        buttonRef.current.click()
    }

    async function handleFetch(data: SearchFormInputs) {
        const urlRepos = `https://api.github.com/users/${data.user}/repos`

        const response = await fetch(urlRepos)

        const repos = await response.json()

        const newUser = {
            avatar_url: repos[0].owner.avatar_url,
            name: data.user,
            reposit: repos.map((repo)=> {
                return repo.name
            })
        }

        setUserRepo(newUser)

        reset()

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
                <form action="" onSubmit={handleSubmit(handleFetch)}>
                        <div className='query'>
                            <input type="text" placeholder="Nome do usuário Github" {...register("user")} list='browsers'/>
                            {/* {repositories.length > 0 ? 
                                <input type="text" placeholder="Nome do repositório." {...register("repo")} list='repositories'/>
                            : null} */}
                            <button>Buscar Usuário</button>
                        </div>
                        
                        {userRepo.reposit.length > 0 ?
                            <div className='userRepo'>
                                <div className='profile'>
                                    <img src={userRepo.avatar_url} />
                                    <span>{userRepo.name}</span>
                                </div>
                                <div className='scrollArea'>
                                    <h2>Repositórios</h2>
                                    {userRepo.reposit.length > 0 ? userRepo.reposit.map((repo)=> {
                                        return <ButtonRepo key={repo} repo={repo} userName={userRepo.name} closeModal={closeModal}/>
                                    })
                                        : null
                                    }
                                </div>
                            </div> 
                        : null}
                </form>

            </Content>
        </Dialog.Portal>
    )
}