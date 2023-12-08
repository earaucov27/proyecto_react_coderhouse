// App.js
import React from 'react';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <div className="container mt-4">
        {/* Aquí va el contenido de tu página */}
        <h1>3DPixels</h1>
      </div>
    </div>
  );
}

export default App;
