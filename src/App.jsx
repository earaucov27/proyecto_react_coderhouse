// App.jsx
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ItemListContainerPs5 from './components/ItemListContainerPs5';
import ItemListContainerXbox from './components/ItemListContainerXbox';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    const [selectedPlatform, setSelectedPlatform] = useState("ps5"); // Plataforma predeterminada

    return (
        <div>
            <NavBar setSelectedPlatform={setSelectedPlatform} />
            <div className='encabezado'>
                <img src="/src/assets/images/3dpixels-logo.png" alt="logo" />
                <h1>3DPixels</h1>
                <p>jugamos en serio</p>
            </div>
            <div className='container'>
                {/* Contenido de la plataforma seleccionada */}
                {selectedPlatform === "ps5" ? <ItemListContainerPs5 /> : null}
                {selectedPlatform === "xbox" ? <ItemListContainerXbox /> : null}
            </div>
        </div>
    );
}

export default App;
