import "./header.css"
import header from '../../assets/logo-gato.png'
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (<>
    <div className="header-components"> 
        <div className="logo"><img src={header} alt="logo com desenho de um gato amarelo de perfil" /></div>
        <nav> 

            <ul>
                <li> <NavLink to="/porque-nos">Por que nós</NavLink></li>
                <li><a href='#'>Quartos</a></li>
                <li><a href='#'>Avaliação</a></li>
                <li><a href='#'>Como nos encontrar</a></li>  
            </ul>
        </nav>
    </div>
    </>
    )
}