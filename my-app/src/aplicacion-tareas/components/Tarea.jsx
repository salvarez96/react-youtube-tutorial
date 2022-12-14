import React from "react";
import '../styles/Tarea.css';
import { AiOutlineCloseCircle as CloseCircle } from 'react-icons/ai';

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return(
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
        onClick={() => completarTarea(id)} 
        className="tarea-texto"
      >
        {texto}
      </div>
      <div 
        className="tarea-contenedor-iconos"
        onClick={() => eliminarTarea(id)}
      >
        <CloseCircle className="tarea-icono" />
      </div>
    </div>
 );
}

export default Tarea;