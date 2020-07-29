import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//Importar componentes
import Header from './components/header';
import Slider from './components/slider'; 
import Sidebar from './components/Sidebar'; 
import Footer from './components/footer';
import SeccionPruebas from './components/SeccionPruebas';
import Peliculas from './components/Peliculas';

function HolaMundo(nombre, edad){
  var presentacion = (
    <div>
      <h2>Hola, soy {nombre}</h2>
      <h3>tengo {edad} años</h3>
    </div>
  );  
  return presentacion;
}

function App() {
  
  var buttonstring = "pulsame";

  return (
    <div className="App">
      <Header></Header>
      <Slider
          title="Bienvenido a mi curso de react"
          btn={buttonstring}
      ></Slider>

      <div className="center">
          <Peliculas></Peliculas>
          <Sidebar></Sidebar>
          <div className="clearfix"></div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
