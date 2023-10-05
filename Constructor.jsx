import React from "react";
import Tarjeta from "../Componentes/Tarjeta";


function ConstructorProductos({valorSeleccionadoLista}){

    const valorSel = [];
    
    class Bicicleta {
        constructor (marca , modelo, precio, especificacion,foto,cantidad) {
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
            this.especificacion = especificacion;
            this.foto = foto;
            this.cantidad = cantidad;       
                 
        };

    };

    const productosScott = [
        {id:0,marca:"scott",modelo:"addict1",precio:12000000,especificacion:"Nueva",foto:require("../Componentes/img/454.jpg"),cantidad:1},
        {id:1,marca:"scott",modelo:"addict2",precio:10000000,especificacion:"Nueva",foto:require("../Componentes/img//4542.jpg"),cantidad:1},
        {id:2,marca:"scott",modelo:"addictRc",precio:10000000,especificacion:"Nueva",foto:require("../Componentes/img//4546.jpg"),cantidad:1},
        {id:3,marca:"scott",modelo:"addictRc",precio:10000000,especificacion:"Nueva",foto:require("../Componentes/img//4547.jpg"),cantidad:1}
    ];
    
    
    const productosGiant = [
        {marca:"Giant",modelo:"advance",precio:12000000,especificacion:"Nueva",foto:require("../Componentes/img/giantadvance.jpg"),cantidad:1},
        {marca:"Giant",modelo:"tcr",precio:10000000,especificacion:"Nueva",foto:require("../Componentes/img/gianttcrpro.jpg"),cantidad:1},
        {marca:"Giant",modelo:"propel",precio:10000000,especificacion:"Nueva",foto:require("../Componentes/img/propeladvance.jpg"),cantidad:1},
        {marca:"Giant",modelo:"propelBlue",precio:10000000,especificacion:"Nueva",foto:require("../Componentes/img/propelgray.jpg"),cantidad:1}
    
    ];
    const productosTrek = [
        {marca:"Trek",modelo:"Madone",precio:19000000,especificacion:"Nueva",foto:require("../Componentes/img//TREKEMONDA.JPG"),cantidad:1},
        {marca:"Trek",modelo:"Emonda",precio:15000000,especificacion:"Nueva",foto:require("../Componentes/img/TREKEMONDA.JPG"),cantidad:1},
        {marca:"Trek",modelo:"Madone Blue",precio:13000000,especificacion:"Nueva",foto:require("../Componentes/img/TREKMADONEBLUE.JPG"),cantidad:1},
        {marca:"Trek",modelo:"Supercaliber",precio:16000000,especificacion:"Nueva",foto:require("../Componentes/img/TREKSUPERCALIBER.JPG"),cantidad:1}
        
    ];
    
    const productosColnago = [
        {marca:"Colnago",modelo:"C64",precio:20000000,especificacion:"Nueva",foto:require("../Componentes/img/COLNAGOC60.jpg"),cantidad:1},
        {marca:"Colnago",modelo:"C60",precio:28000000,especificacion:"Nueva",foto:require("../Componentes/img/COLNAGOC60.jpg"),cantidad:1},
        {marca:"Colnago",modelo:"VR3S",precio:29000000,especificacion:"Nueva",foto:require("../Componentes/img/colnagovr3s.jpg"),cantidad:1},    
        
    ];
    
    const productosPinarello = [
        {marca:"Pinarello",modelo:"f12",precio:21000000,especificacion:"nueva",foto:require("../Componentes/img/pinarello.jpg"),cantidad:1},
        {marca:"Pinarello",modelo:"f10",precio:22000000,especificacion:"nueva",foto:require("../Componentes/img/pinarello10.jpg"),cantidad:1},
        {marca:"Pinarello",modelo:"contrareloj",precio:23000000,especificacion:"nueva",foto:require("../Componentes/img/pinarellocontrareloj.jpg"),cantidad:1},    
        
    ];


    evaluarValor(valorSeleccionadoLista)


    function evaluarValor (valorSeleccionadoLista){  
    

    
        if(valorSeleccionadoLista ==="Scott"){
            
            productosScott.forEach((item)=> {
            new Bicicleta (item)
            valorSel.push(item);  });
        }   
        
        if( valorSeleccionadoLista ==="Giant"){
    
            productosGiant.forEach((item)=> {
            new Bicicleta (item)
            valorSel.push(item);  });
        }
        if(valorSeleccionadoLista ==="Colnago"){
    
            productosColnago.forEach((item)=> {
            new Bicicleta (item)
            valorSel.push(item);  });
        }
    
        if(valorSeleccionadoLista ==="Pinarello"){
    
            productosPinarello.forEach((item)=> {
            new Bicicleta (item)
            valorSel.push(item);  });
        }
        if(valorSeleccionadoLista ==="Trek"){
    
            productosTrek.forEach((item)=> {
            new Bicicleta (item)
            valorSel.push(item);  });
        }      
    
        
    
    }

    return(
        <Tarjeta valorSeleccionadoLista={valorSel} ></Tarjeta>
    )



}export default ConstructorProductos;
