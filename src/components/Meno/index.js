import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';
function Menu(){//Como vai ser um componente tem de iniciar com letra maiuscula
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Natureflix Logo"/>
            </Link>
            
            <Button as ={Link} className="ButtonLink" to="cadastro/Video">
                Novo Video 
            </Button> 
        </nav>
    )
}

export default Menu; 