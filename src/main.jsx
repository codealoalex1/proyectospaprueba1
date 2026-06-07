import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/* Importar archivos de bootstrap */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

/* Importar la aplicacion */
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
