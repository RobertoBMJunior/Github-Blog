import { HeaderContainer } from "./styles"
import Logo from '../../images/Logo.svg'
import LeftFigure from '../../images/HeaderLeftFigure.svg'
import RightFigure from '../../images/HeaderRightFigure.svg'


export function Header () {                    
    return (
        <HeaderContainer>
            <img src={LeftFigure} alt="" />
            <img src={Logo} alt="" />
            <img src={RightFigure} alt="" />
        </HeaderContainer>
    )
}