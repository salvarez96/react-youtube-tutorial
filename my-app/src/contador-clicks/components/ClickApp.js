import React from 'react';
import '../styles/ClickApp.css'
import Boton from './Boton';
import Contador from './Contador';
import Header from '../../components/Header';

class ClickApp extends React.Component {
  constructor(){
    super();
    this.state = {
      contador: 0
    };
    this.manejarClick = this.manejarClick.bind(this);
    this.reinicarClick = this.reinicarClick.bind(this);
  }

  manejarClick() {
    this.setState(({ contador }) => ({ contador: contador + 1}));
  }
  reinicarClick() {
    this.setState({ contador : 0 });
  }

  render() {
    return(
      <section className='click-contenedor'>
        <Header />
        <div className='contador'>
          <Contador
            conteo={this.state.contador} />
          <Boton 
            texto='Click'
            esBotonDeClick={true}
            manejarClick={this.manejarClick} />
          <Boton 
            texto='Reiniciar'
            esBotonDeClick={false}
            manejarClick={this.reinicarClick} />
        </div>
      </section>
    );
  }
}

export default ClickApp