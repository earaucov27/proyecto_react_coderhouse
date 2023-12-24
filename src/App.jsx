// App.jsx
import React from 'react'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx';

/* IMPORTACIONES BOOTSTRAP */
import 'bootstrap/dist/css/bootstrap.min.css';

// Importación de css
import './App.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <div className='encabezado'>
        <div className="logo-container">
          <img src="/src/assets/images/3dpixels-logo.png" alt="logo" />
        </div>
        <div className="text-container">
          <h1>3DPixels</h1>
          <p>jugamos en serio</p>
        </div>
      </div>
      <div className='container'>
        <ItemListContainer />
      </div>
    </div>
  )
}

export default App