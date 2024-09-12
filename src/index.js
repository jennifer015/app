import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importa los estilos básicos
import App from './App'; // Importa el componente App

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Renderiza el componente en el elemento con id 'root'
);
