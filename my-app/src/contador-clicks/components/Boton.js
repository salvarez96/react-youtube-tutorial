import React from "react";

function Boton({ texto, esBotonDeClick, manejarClick }) {
  return (
    <button 
    type="button" 
    className={esBotonDeClick ? 'boton-click' : 'boton-reiniciar'}
    onClick={manejarClick}>
      {texto}
    </button>
  );
}

export default Boton;