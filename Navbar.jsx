import React from "react";
import Navegador from "./Navegador";

function Navbar (){

    return(
        <div className="Navegador ">
             <nav className="navbar navbar-expand-lg" >
             <Navegador  texto={"Inicio"}></Navegador>    
             <Navegador  texto={"Bicicletas"} ></Navegador>
             <Navegador  texto={"Componentes"}></Navegador>
             <Navegador  texto={"Accesorios"}></Navegador>
             <Navegador  texto={"Portafolio"}></Navegador>
             <Navegador  texto={"Servicios"}></Navegador>
             <Navegador  texto={"Contacto"}></Navegador>
             </nav>

        </div>
    )
}
export default Navbar;
