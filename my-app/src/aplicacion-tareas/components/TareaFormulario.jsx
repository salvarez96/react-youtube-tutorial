import React from "react";
import '../styles/TareaFormulario.css';

function TareaFormulario() {
  return(
    <form action="" className="tarea-formulario">
      <input 
        type="text" 
        className="tarea-input" 
        placeholder="Escribe una tarea"
        name="texto"
      />
      <button type="button" className="tarea-boton">
        Agregar tarea
      </button>
    </form>  
 );
}

export default TareaFormulario;