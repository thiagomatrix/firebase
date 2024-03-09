import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/vendor/bootstrap.min.css';
import './assets/vendor/bootstrap.rtl.only.min.css';
import './assets/scss/main.scss' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
