import React from 'react';
import Card from './card';

const Home = () => {
    const obj = {
        titulo: 'titulo 1',
        descripcion: 'descripcion 1',
        alt: 'alt 1',
        href: 'url',
        img: 'img',
        boton: 'detalle'
    }

    return (
        <div>
            <Card obj={obj}/>
        </div>
    )
}

export default Home;