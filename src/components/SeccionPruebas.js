import React, { Component } from 'react';

import MiComponente from './MiComponente';



class SeccionPruebas extends Component {

    contador = 0;

    /*
    constructor(props){
        super(props);

        this.state = {
            contador: 0
        };
    }
    */

    state = {
        contador: 0
    };
    


    HolaMundo(nombre, edad) {
        var presentacion = (
            <div>
                <h2>Hola, soy {nombre}</h2>
                <h3>tengo {edad} años</h3>
            </div>
        );
        return presentacion;
    }

    Sumar = (e) => {
      //this.contador = this.contador+1; 
      //this.state.contador = this.state.contador + 1; 
      
      this.setState({
        contador: (this.state.contador + 1)
      });
      
    }
    Restar = (e) => {
        //this.contador = this.contador-1;  
        this.setState({
            contador: (this.state.contador - 1)
          });
    }

    render() {
        var nombre = "Eider Buñuel";
        return (
            <section id="content">
                <h2 className="subheader">Últimos artículos</h2>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
            </p>
                {this.HolaMundo(nombre, 12)}

                <section className="componentes">
                    <MiComponente></MiComponente>
                    <MiComponente></MiComponente>

                </section>

                <h2 className="subheader">Estado</h2>
                <p>Contador: {this.state.contador}</p>

                <p>
                    <input type="button" value="sumar" onClick={this.Sumar}/>
                    <input type="button" value="restar" onClick={this.Restar}/>
                </p>

            </section>
        );
    }
}

export default SeccionPruebas;