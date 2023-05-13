import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { ContainerLayout } from "./styles";
import { Link } from "@phosphor-icons/react";

export function DefaultLayout () {
    return (
        <ContainerLayout>
            <Header/>
            <Outlet/>
            <footer>
                <a className="githubLink" href="https://github.com/RobertoBMJunior/Github-Blog">
                    <strong>
                        Github Blog
                    </strong>
                    <Link/>
                </a>
                <span>
                    Made by <strong>Roberto Barbosa de Melo Junior</strong> 
                </span>
            </footer>
        </ContainerLayout>
    )
}