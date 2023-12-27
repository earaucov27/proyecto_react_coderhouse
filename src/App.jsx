// App.jsx
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ItemListContainerPS5 from './components/ItemListContainerPS5'; // Cambia el nombre de importación
import ItemListContainerXbox from './components/ItemListContainerXbox'; // Cambia el nombre de importación
import ItemDetail from './components/ItemDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    const [selectedPlatform, setSelectedPlatform] = useState("ps5");

    return (
        <BrowserRouter>
            <div>
                <NavBar setSelectedPlatform={setSelectedPlatform} />
                <div className='encabezado'>
                    <img src="/src/assets/images/3dpixels-logo.png" alt="logo" />
                    <h1>3DPixels</h1>
                    <p>jugamos en serio</p>
                </div>
                <div className='container'>
                    <Routes>
                        <Route path="/" element={<ItemListContainerPS5 />} />
                        <Route path="/ps5" element={<ItemListContainerPS5 />} />
                        <Route path="/xbox" element={<ItemListContainerXbox />} />
                        <Route path="/product/:id" element={<ItemDetail />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
