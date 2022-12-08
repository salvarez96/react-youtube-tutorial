import React from "react";
import TareaFormulario from "./TareaFormulario";
import '../styles/ListaDeTareas.css';

function ListaDeTareas() {
  return(
    <>
      <TareaFormulario />
      <article className="tareas-lista-contenedor">
        LISTA DE TAREAS
      </article>
    </>
 );
}

export default ListaDeTareas;