import React from "react";
import ListaDesplegable from "./ListaDesplegable";
import { Link } from "react-router-dom";


function Navegador ({texto, texto2}){

 
    return (

          
                <div className="dropdown">                                                        
                    <lu  role="button" data-bs-toggle="dropdown" aria-expanded="false">{texto}   
                        <ListaDesplegable texto = {texto}></ListaDesplegable>
                    </lu> 
                </div>

    )
}

export default Navegador;
