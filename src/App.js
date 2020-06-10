import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './component/header';
import Home from './component/home';
import Detalle from './component/detalle';
import Formulario from './component/formulario';
import Footer from './component/footer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Route exact path="/" component = {Home}/>
        <Route path="/detalle" component = {Detalle}/>
        <Route path="/contacto" component = {Formulario}/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
