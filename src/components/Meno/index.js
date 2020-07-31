import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';
function Menu(){//Como vai ser um componente tem de iniciar com letra maiuscula
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Natureflix Logo"/>
            </a>
            
            <Button as ="a" className="ButtonLink" href="/">
                Novo Video
            </Button> 
        </nav>
    )
}

export default Menu; 