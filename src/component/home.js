import React from 'react';
import Card from './card';

const Home = () => {
    const obj = [
        {
            titulo: 'titulo 1',
            descripcion: 'descripcion 1',
            alt: 'alt 1',
            href: 'url',
            img: 'img',
            boton: 'detalle',
            id: 1
        },
        {
            titulo: 'titulo 2',
            descripcion: 'descripcion 2',
            alt: 'alt 2',
            href: 'url 2',
            img: 'img 2',
            boton: 'detalle 2',
            id: 2
        },
        {
            titulo: 'titulo 3',
            descripcion: 'descripcion 3',
            alt: 'alt 3',
            href: 'url 3',
            img: 'img 3',
            boton: 'detalle 3',
            id: 3
        }
    ]

    const list = obj.map((item) => <Card key={item.id} obj={item}/>);

    return (
        <div>
            {list}
        </div>
    )
}

export default Home;

