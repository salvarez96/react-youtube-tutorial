import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ClickApp from './contador-clicks/components/ClickApp';
import CalcApp from './calculadora/components/CalcApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ClickApp />
    <CalcApp />
  </React.StrictMode>
);