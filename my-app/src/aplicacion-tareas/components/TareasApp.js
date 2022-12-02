import React from 'react';
import Header from '../../components/Header.jsx';
import '../styles/TareasApp.css';
import Tarea from './Tarea.jsx';

function TareasApp() {
  return(
    <section className='aplicacion-tareas'>
      <Header />
      <div className="tareas-lista-principal">
        <h2>Mis Tareas</h2>
        <Tarea texto='Aprender React'/>
      </div>
    </section>
  );
}

export default TareasApp;