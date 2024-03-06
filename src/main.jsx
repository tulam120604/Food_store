// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Browser } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { DataProvide } from './DataContext/DataProvide.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Browser>
    <DataProvide>
      <App />
    </DataProvide>
  </Browser>
  // </React.StrictMode>,
)
