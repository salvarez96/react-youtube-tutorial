import React, { useState } from "react";
import '../styles/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';
/* uuidv4 es un paquete para generar identificadores únicos de RFC4122 automáticos y no-repetidos
en una aplicación. Se instala con NPM y se manda a llamar como una función
*/

function TareaFormulario(props) {

  const [input, setInput] = useState('');

  // función para actualizar el input según el texto que el usuario rellene en el campo
  const manejarCambio = e => {
    /* e.target.value es lo que permitirá extraer el texto directamente del campo
    del input de tipo texto
    e.target imprime directamente la etiqueta a la cual se le está aplicando algún cambio
    o alguna actualización */
    setInput(e.target.value);
  }

  // función que se llamará al momento de enviar el formulario
  const manejarEnvio = e => {
    /* preventDefault() es una función especial del navegador que evita que la aplicación se vuelva a cargar
    al momento de enviar un formulario */
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva);
  }

  return(
    <form 
      action="" 
      className="tarea-formulario"
      onSubmit={manejarEnvio}
    >
      <input 
        type="text" 
        className="tarea-input" 
        placeholder="Escribe una tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button type="submit" className="tarea-boton">
        Agregar tarea
      </button>
    </form>  
 );
}

export default TareaFormulario;