import React from "react";
import { useState } from "react";
import Imprimir from "../Constructor/ImprimirConstructor";





function ListaDesplegable (props){



    ListaItems(props.texto)
    

    return(
        
            <ListaItems texto = {props.texto} ></ListaItems>            
        
    )

}
export default ListaDesplegable;



function DesplegarItems (arreglo){
      
 


    const [selectOption, setSelectOption] = useState ("");

    const handleOption = (event) => {
        setSelectOption(event)
        
        
    };

    

    
    return(
         
        <div>
              <lu  className="dropdown-menu dropdown-menu-dark" >{arreglo.map((opcion)=>(<li  onClick={()=>{handleOption(opcion.value)}}  className="dropdown-item" key={opcion.value} value={opcion.value} >{opcion.value}</li>))}   
              </lu>            
               {selectOption}
               {Imprimir({selectOption})}
              
              
        </div>
    
    )
    
    
}/* <ConstructorProductos valorSeleccionadoLista={selectOption}></ConstructorProductos>*/






function ListaItems({texto}){

    const  marcaBicicleta =[
      
        {value:"Scott"},
        {value:"Colnago"},
        {value:"Giant"},
        {value:"Pinarello"},
        {value:"Trek"}
       ];

       const componentes = [
        {value:"Marcos"},
        {value:"Grupos"},
        {value:"Ruedas"},
        {value:"Llantas"},
        {value:"Cadenas"}

       ];

       const servicios = [
        {value:"Acompañamiento"},
        {value:"Mejora"},
        {value:"Entrenamiento"},
        
       ];

        let arreglo = "";


       if (texto === "Bicicletas")
       {

        arreglo = marcaBicicleta;
        
        return(

            DesplegarItems(arreglo)
          
        );}

        if (texto === "Componentes")
        {
 
         arreglo = componentes;
         
         return(
 
             DesplegarItems(arreglo)
           
         );}

         if (texto === "Servicios")
         {
  
          arreglo = servicios;
          
          return(
  
              DesplegarItems(arreglo)
            
          );}

         else{
            return(  
            <div>
              <lu  className="dropdown-menu dropdown-menu-dark" >   
              <li  className = "dropdown-item">Lista Dos</li> </lu>
            </div>
          );
        };



}


