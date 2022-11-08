import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

 function App() {

  const categorias = ["Electronics", "Audio & Video", "Clothing"]

  const temperatura = 18;

  return (
    <>
      <NavBar 
        categories={categorias} 
        temp={temperatura} 
      />
      <ItemListContainer greeting={"Hola! Bienvenido a nuestra app!"}/>
    </>
  );
}

export default App;
