import React from 'react';
import NavBar from './components/NavBar.jsx';
import Marvel from './components/Marvel.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import './App.css';

export default function App() {
  return (
    <>
      <NavBar background={'transparent'} />
      <Marvel title="Marvel Store" />
      <ItemListContainer greeting= "Lista de Productos"/>

    </>
  );
}

