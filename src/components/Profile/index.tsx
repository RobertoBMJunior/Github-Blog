import { ProfileContainer } from "./styles";
import Avatar from '../../images/avatar.png'
import { Buildings, GithubLogo, Link, Users } from "@phosphor-icons/react";

export function Profile () {
    return (
        <ProfileContainer>
            <img src={Avatar} alt="" />
            <div className="about">
                <div className="name_and_link">
                    <h1>Cameron Williamson</h1>
                    
                    <a className="githubLink" href="https://github.com/RobertoBMJunior/Github-Blog">
                        <Link />
                        <span>
                            GITHUB
                        </span>
                    </a>
                </div>
                <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                <div className="informations">
                    <div>
                        <GithubLogo size={18} weight="fill"/>
                        <span>cameronwll</span>
                    </div>
                    <div>
                        <Buildings size={18} weight="fill"/>
                        <span>Rocketseat</span>
                    </div>
                    <div>
                        <Users size={18} weight="fill"/>
                        <span>32 seguidores</span>
                    </div>
                </div>
            </div>
        </ProfileContainer>
    )
}