import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//Importar componentes
import MiComponente from './components/MiComponente';
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
  var nombre = "Eider Buñuel";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {HolaMundo(nombre, 12)}
      </header>
      <section className="componentes">   
          <MiComponente></MiComponente>
          <Peliculas></Peliculas>
      </section>

    </div>
  );
}

export default App;
