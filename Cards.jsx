import React from "react";

function Etiquetas (){

 
    return(
        <div className="cards"> 
        <div className="card1"> 
         <p>
         <button   className="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
     Toggle width collapse< img src={require( "../Imagenes/imag3.jpg")} alt="imagen"></img></button></p>
         <div >
             <div className="collapse" id="collapseWidthExample">
                 <div className="card card-body" >
       This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
             </div>
          </div>
        </div>


 
        </div>
      <div/> 

      {  React.createElement("div",{ className :"go"}, "Ejemplo insertando un div como en js")}
    </div> 
    );

}
export default Etiquetas;
