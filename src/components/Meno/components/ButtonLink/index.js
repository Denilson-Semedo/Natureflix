import React from 'react';

function ButtonLink(props){//Como vai ser um componente tem de iniciar com letra maiuscula
    console.log(props);
    return (
            <a className={props.className} href={props.href}>
                {props.children}
            </a>
    )
}

export default ButtonLink;