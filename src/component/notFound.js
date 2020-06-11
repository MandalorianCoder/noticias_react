import React from 'react';

const NotFound = (props) => {
    return (
        <div>
            <div className="alert alert-danger" role="alert">
                No existe el detalle de la noticia {props.id}
            </div>
            <a className="btn btn-primary" href="/" role="button">Ir a HOME</a>
        </div>
    )
}

export default NotFound;