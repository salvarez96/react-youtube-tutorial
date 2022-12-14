import React, { useState } from "react";
import '../styles/ListaDeTareas.css';
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";

function ListaDeTareas() {
  
  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    /* tarea.texto.trim() es una forma de probar que una cadena de caracteres,
    en este caso tarea.texto, no es una cadena vacía.*/
    if (tarea.texto.trim()){
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  }

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }

  return(
    // Fragmento: etiquetas vacías en react
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {/* map es la forma más común de crear listas de componentes en react  */}
        {tareas.map(tarea => {
          return (
            <Tarea 
              // key es una forma que tiene react de identificar un elemento en una 
              // lista y debe ser único. El key es esencial para que react sepa el orden
              // de los elementos de una lista y no los cambie al momento de actualizarla.
              // Hay que tener en cuenta que key no funciona como un prop, por lo que en este
              // ejemplo fue necesario crear tanto el prop id como el key.
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              eliminarTarea={eliminarTarea}
              completarTarea={completarTarea}
            />
          )
        })}
      </div>
    </>
 );
}

export default ListaDeTareas;