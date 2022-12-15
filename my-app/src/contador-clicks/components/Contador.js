import React from "react";
import '../styles/Contador.css';

class Contador extends React.Component {
  render(){
    return (
      <div className="conteo">
        {this.props.conteo}
      </div>
    );
  }
}


export default Contador;