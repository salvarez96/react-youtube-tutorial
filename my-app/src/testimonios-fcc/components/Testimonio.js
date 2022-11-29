import React from "react";
import '../styles/Testimonio.css';

function Testimonio(props) {
  return (
    <section className="contenedor-testimonio">
      <img 
        className="testimonio__imagen" 
        src={require(`../images/testimonio-${props.imagen}.png`)}
        alt={`${props.imagen} selfie`} />
      <div className="testimonio__texto">
        <p className="texto__nombre">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="texto__cargo">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto__descripcion">{props.testimonio}</p>
      </div>
    </section>
  );
}

export default Testimonio;