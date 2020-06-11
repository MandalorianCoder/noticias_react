import React from 'react';
import Card from './card';
import ListCard from '../data/dataCard';

class Detalle extends React.Component{
    state = {id: this.props.match.params.id}


    render(){
        
        let {id} = this.state;
        let item = ListCard.find(element => element.id == id);


        return (
            <div>
                <Card obj={item}/>
            </div>
        )
    }
}


export default Detalle;