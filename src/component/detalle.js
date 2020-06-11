import React from 'react';
import Card from './card';
import ListCard from '../data/dataCard';
import NotFound from './notFound';
import $ from 'jquery';
import ResultListCard from '../data/dataCard';

class Detalle extends React.Component{

    state = {id: this.props.match.params.id, listCard: []}

    componentDidMount(){
        $.ajax({
            method: "GET",
            url: "http://localhost:8000/api/multimedia",
            dataType: "json",
            data: {page: 1}
        })
        .done((result) => {
            var listImg = result;
            $.ajax({
                method: "GET",
                url: "http://localhost:8000/api/articulos",
                dataType: "json",
                data: {page: 1}
            })
            .done((result) => {
                var list = ResultListCard(result, listImg);
                this.setState({
                    listCard: list
                });
            });
        });
    }

    render(){
        
        let {id} = this.state;
        var card = "";
        if (this.state.listCard.length > 0){
            let item = this.state.listCard.find(element => element.id == id);
            if (item) card = <Card obj={item}/>
        }


        return (
            <div>
                {card}
            </div>
        )
    }
}


export default Detalle;