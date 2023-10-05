import './App.css';
import "./Estilos/Cards.css";
import BotonCarrito from './Componentes/Carrito';
import Navbar from './Componentes/Navbar';
import Footer from './Componentes/Footer';
import Etiquetas from './Componentes/Cards';
import ConstructorProductos from './Constructor/Constructor';
import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter,Route,Routes } from 'react-router-dom';




function App() {


    
  return (
    
    
    <div className="App">
    
     <BrowserRouter>

     <Link className = "T" to='/'> <h1 className='titulo'>BIKESTWOGO</h1></Link>      
    
      <BotonCarrito></BotonCarrito>

     <Navbar/>
     
      
        
      <Routes>
        <Route path='/' ></Route>
        <Route path='/Constructor/Scott' element = {<ConstructorProductos valorSeleccionadoLista={"Scott"}></ConstructorProductos>}></Route>
      </Routes>
     
     
      <Etiquetas></Etiquetas>
      <Etiquetas></Etiquetas>
       

       <Footer></Footer>
        { React.createElement("div",{ className:"Tarjeta"},"Imprimiendo mensaje")}

      </BrowserRouter>

    </div>


  );
}

export default App;
