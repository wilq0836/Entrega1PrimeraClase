import React from "react";
import { Component } from "react";

class BotonCarrito extends Component{

      
 
    render(){
       return (
         
             <CuerpoCarrito></CuerpoCarrito>
                
       );
    }
 
 }

 export default BotonCarrito;

 const CuerpoCarrito = () =>{

    return(

        <div className="Carrito">
            
           
            <button id="toggleMyModal" type="button" className ="btn btn-secondary btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal" >Carrito de compras <i className="bi bi-bag-check-fill"></i></button>
            
            
            <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Carrito</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="container-fluid">
                                <div className="container">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Marca</th>
                                                <th scope="col">Modelo</th>
                                                <th scope="col">Cantidad</th>
                                                <th scope="col">Precio</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody id="items"></tbody>
                                        <tfoot>
                                            <tr id="footer">
                                                <th scope="row" >Total Compra: </th>
                                                <th  id = "total-compra" scope="row" >Carrito vacío</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                <div className="row" id="cards"></div>
            </div>
          </div>
          <div className="modal-footer">
          <button type="button" className="btn btn-secondary"  data-bs-dismiss="modal">Cerrar</button>
          <button type="button" className="btn btn-outline-success me-2"  data-bs-dismiss="modal" >Terminar compra</button>
          </div>
      </div>
  </div>
</div>
   
          </div>   

    )
 }
