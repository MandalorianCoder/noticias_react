import React from 'react';

const Card = (props) => {
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img src={props.obj.img} className="card-img-top" alt={props.obj.alt}/>
                <div className="card-body">
                    <h5 className="card-title">{props.obj.titulo}</h5>
                    <p className="card-text">{props.obj.descripcion}</p>
                    <a href={props.obj.href} className="btn btn-primary">{props.obj.boton}</a>
                </div>
            </div>
        </div>
    )
}

export default Card;