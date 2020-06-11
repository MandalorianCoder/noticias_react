import React from 'react';
import Card from './card';
import $ from 'jquery';
import ResultListCard from '../data/dataCard';



class Home extends React.Component{
    state = {listCard: []}

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

    render (){
        const list = this.state.listCard.map((item) => <Card key={item.id} obj={item}></Card>);

        return (
            <div>
                {list}
            </div>
        )
    }

    
}

export default Home;

