import React from "react";
import '../styles/Boton.css';

function Boton({ children }) {
  const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=');
  }
  return (
    <div 
      className={
        `boton-contenedor 
        ${esOperador(children) ? 'operador' : 
        children === '=' ? 'igual' : ''}`.trimEnd()
        }>
      {children}
    </div>
  );
}

export default Boton;