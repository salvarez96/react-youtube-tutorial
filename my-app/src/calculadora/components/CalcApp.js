import React from 'react';
import fccLogo from '../images/fcc_primary_large.png';
import '../styles/CalcApp.css';
import Boton from './Boton';
import Pantalla from './Pantalla';
import BotonClear from './BotonClear';
import { useState } from 'react';

function CalcApp() {

  const [input, setInput] = useState('');

  const agregarInput = value => {
    setInput(input + value);
  }

  return (
    <section className='calculadora-contenedor'>
      <div className='logo-contenedor'>
        <img 
          className='logo__freecodecamp' 
          src={fccLogo} 
          alt='Logo de FreeCodeCamp' />
      </div>
      <div className="calculadora">
        <Pantalla 
          input={input} />
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>=</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear>Clear</BotonClear>
        </div>
      </div>
    </section>
  );
}

export default CalcApp;