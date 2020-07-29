import React, {Component} from 'react';
import Pelicula from './Pelicula';

class Peliculas extends Component{
    state = {
        peliculas: [
            {titulo:'batman vs superman', image:'https://www.lavanguardia.com/r/GODO/LV/p7/WebSite/2020/05/18/Recortada/img_jdelriov_20200518-154128_imagenes_lv_terceros_13321707_511307249069860_6496714579640500048_n-456-k3vD-U481252852604gpE-992x558@LaVanguardia-Web.jpg'},
            {titulo: 'Gran torino', image:'https://www.artmajeur.com/medias/standard/f/a/fasquelolivier/artwork/11789156_gran-torino.jpg'},
            {titulo: 'Looper', image:'https://lanetaneta.com/wp-content/uploads/2019/07/Escopeta-de-trabuco-de-Looper-explicada-Screen-Rant-780x405.jpg'}
        ],
        nombre: 'Eider Buñuel'
    };

    //metodo obligatorio dentro deun componente react
    render(){
        return(

            <div id="content" className="peliculas">
                
                <h2 className="subheader">Peliculas</h2>
                <p>Seleccion de las peliculas favoritas de {this.state.nombre}</p>
            
                {/*Crear componente peliculas*/}
                <div id="articles" className="peliculas">
                {
                    this.state.peliculas.map((pelicula, i) => {
                        return(
                            <Pelicula key={i} pelicula={pelicula}></Pelicula>
                        )
                    })
                }
                </div>


            </div>
        );
    }
}

export default Peliculas;