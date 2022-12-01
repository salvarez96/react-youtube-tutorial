import React from 'react';
import fccLogo from '../images/fcc_primary_large.png';
import '../styles/CalcApp.css';
import Boton from './Boton';
import Pantalla from './Pantalla';
import BotonClear from './BotonClear';

function CalcApp() {
  return (
    <section className='calculadora-contenedor'>
      <div className='logo-contenedor'>
        <img 
          className='logo__freecodecamp' 
          src={fccLogo} 
          alt='Logo de FreeCodeCamp' />
      </div>
      <div className="calculadora">
        <Pantalla />
        <div className="fila">
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className="fila">
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className="fila">
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className="fila">
          <Boton>.</Boton>
          <Boton>0</Boton>
          <Boton>=</Boton>
          <Boton>/</Boton>
        </div>
        <div className="fila">
          <BotonClear>Clear</BotonClear>
        </div>
      </div>
    </section>
  );
}

export default CalcApp;