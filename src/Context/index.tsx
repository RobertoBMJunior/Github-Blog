import { ReactNode, createContext, useState } from "react"

interface GithubContextType {
    userName: string
    setUserName: (user: string) => void
    repo: string
    setRepo: (user: string) => void
}

interface GithubProviderProps {
    children: ReactNode
}

export const GithubContext = createContext({} as GithubContextType)

export function GithubProvider ({children}: GithubProviderProps) {
    const [ userName, setUserName] = useState('robertobmjunior')
    const [ repo, setRepo] = useState('Github-Blog')


    return (
        <GithubContext.Provider value={{
            userName,
            setUserName,
            repo,
            setRepo,

        }}>
            {children}
        </GithubContext.Provider>
    )
}