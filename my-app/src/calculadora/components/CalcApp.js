import React from 'react';
import '../styles/CalcApp.css';
import Header from '../../components/Header';
import Boton from './Boton';
import Pantalla from './Pantalla';
import BotonClear from './BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function CalcApp() {

  const [input, setInput] = useState('');

  const limpiarPantalla = () => {
    setInput('');
  }

  const agregarInput = value => {
    if(input === 'SyntaxError'){
      limpiarPantalla();
    } else {
      setInput(input + value);
    }
  }

  const calcularResultado = () => {
    try {
      if (isNaN(input))
      setInput(evaluate(input));
    } catch {
      setInput('SyntaxError');
    }
  }

  return (
    <section className='calculadora-contenedor'>
      <Header />
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
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={limpiarPantalla}>Clear</BotonClear>
        </div>
      </div>
    </section>
  );
}

export default CalcApp;