import React from "react";
import '../styles/Contador.css';

function Contador({ conteo }) {
  return (
    <div className="conteo">
      {conteo}
    </div>
  );
}

export default Contador;