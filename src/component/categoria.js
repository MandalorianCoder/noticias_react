import React from 'react';
import ResultListCategoria from '../data/dataCategoria';
import $ from 'jquery';


class Categoria extends React.Component{

    state = {listCat: []};

    componentDidMount(){
        $.ajax({
            method: "GET",
            url: "http://localhost:8000/api/categorias",
            dataType: "json",
            data: {page: 1}
        })
        .done((result) => {
            var list = ResultListCategoria(result);
            this.setState({
                listCat: list
            });
        });
    }

    render(){
        const list = this.state.listCat.map((item) => 
            <div className="row my-3">
                <div className="col-1">{item.id}</div>
                <div className="col-3">{item.nombre}</div>
                <div className="col-2">
                    <a href="#" className="btn btn-primary">Editar</a>
                </div>
                <div className="col-2">
                    <a href="#" className="btn btn-primary">Borrar</a>
                </div>
            </div>
            
            
            );

        return(
            <div className="p-5">
                <button className="btn btn-primary" type="button">Nueva Categoria</button>
                <div className="row">
                    <div className="col-12">
                        {list}
                    </div>
                </div>
            </div>
        )
    }
}


export default Categoria;