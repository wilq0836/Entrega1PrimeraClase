import React from "react";
import { Link } from "react-router-dom";


const carrito = [];
function Targeta ({valorSeleccionadoLista}){
  
  
  return ( 
          imprimirTarjeta(valorSeleccionadoLista)
          )

 }


  const imprimirTarjeta =(valor)=>{
    
   
    return( 

       
    <div className="container1">{
      
      valor.map((item) => 

      <div className="container" key = {item.id}>     
        <div  className = "card m-3 p-3" >  
              <img  className = "card-img-top" src={item.foto} alt={item.modelo}/>
          
            <div className="card-body" >     
                <h5>ID: {item.id} </h5>               
                <h5>Marca: {item.marca} </h5>
                <h5>Modelo: {item.modelo }</h5>
                <h5>Precio: {item.precio}</h5>
                <h5>Especificación: {item.cantidad}</h5>                
                 
            </div>    
              <button  onClick={()=>{
              //let encontrarProducto = carrito.includes(item);
              //const {id,marca,modelo,precio,especificacion,foto,cantidad} = item;
              new Carrito(item);
              carrito.push(item);
              console.log(JSON.stringify(carrito)); 
              Alerta();
        
                     }} key={item.id}   className="btn btn-secondary">Agregar al Carrito</button> 

                <hr></hr>
               <Link className="btn btn-primary" >Ver mas sobre este producto</Link>                    
            </div>
            
            </div>  
   

    )}</div>
   
    )

  }
 
  export default Targeta;
    

  class Carrito {
      constructor(id,marca, modelo, precio, especificacion, foto, cantidad) {
          this.id = id;
          this.marca = marca;
          this.modelo = modelo;
          this.precio = precio;
          this.especificacion = especificacion;
          this.foto = foto;
          this.cantidad = cantidad;
       }}
        
  

        const Alerta =()=>{
          alert("Producto agregado al carrito");
        }





