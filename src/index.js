import React from 'react';
import ReactDOM from 'react-dom/client';
import './Css/index.css';
import App from './App';
/* Paso 2: importamos el administrador de rutas */
import {BrowserRouter} from 'react-router-dom';
/* Importo css de  */
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* Paso 3: envolvemos la aplicacion en el administrador de rutas */
  
  <BrowserRouter >
    <App />
  </BrowserRouter>
);



