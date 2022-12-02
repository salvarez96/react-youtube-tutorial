import React from "react";
import '../styles/Tarea.css';
import { AiOutlineCloseCircle as CloseCircle } from 'react-icons/ai';

function Tarea({ texto }) {
  return(
    <article className="tarea-contenedor">
      <div className="tarea-texto">
        {texto}
      </div>
      <div className="tarea-contenedor-iconos">
        <CloseCircle className="tarea-icono" />
      </div>
    </article>
 );
}

export default Tarea;