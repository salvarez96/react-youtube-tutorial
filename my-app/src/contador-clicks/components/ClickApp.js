import React from 'react';
import '../styles/ClickApp.css'
import Boton from './Boton';
import Contador from './Contador';
import Header from '../../components/Header';
import { useState } from 'react';

function ClickApp() {

  const [contador, setContador] = useState(0);

  const manejarClick = () => {
    setContador(contador + 1);
  }
  const reinicarClick = () => {
    if (contador > 0){
      setContador(0);
    }
  }

  return(
    <section className='click-contenedor'>
      <Header />
      <div className='contador'>
        <Contador
          conteo={contador} />
        <Boton 
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reinicarClick} />
      </div>
    </section>
  );
}

export default ClickApp