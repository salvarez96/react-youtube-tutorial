import React from "react";
import '../styles/Testimonio.css';

class Testimonio extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <section className="contenedor-testimonio">
        <img 
          className="testimonio__imagen" 
          src={require(`../images/testimonio-${this.props.imagen}.png`)}
          alt={`${this.props.imagen} selfie`} />
        <div className="testimonio__texto">
          <p className="texto__nombre">
            <strong>{this.props.nombre}</strong> en {this.props.pais}
          </p>
          <p className="texto__cargo">
            {this.props.cargo} en <strong>{this.props.empresa}</strong>
          </p>
          <p className="texto__descripcion">{this.props.testimonio}</p>
        </div>
      </section>
    );
  }
}

export default Testimonio;