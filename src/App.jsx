import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar';
import ItemListContainerPS5 from './components/ItemListContainerPS5';
import ItemListContainerXbox from './components/ItemListContainerXbox';
import ItemDetailPS5 from './components/ItemDetailPS5';
import ItemDetailXbox from './components/ItemDetailXbox';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';

const App = () => {
    return (
        <div id="main-container">
            <BrowserRouter>
                <CartProvider>
                    <NavBar />
                    <div>
                        <div className='encabezado'>
                            <img src="/src/assets/images/3dpixels-logo.png" alt="logo" />
                            <div className="textos-encabezado">
                                <h1>3DPixels</h1>
                                <p>jugamos en serio</p>
                            </div>
                        </div>
                        <div className='container content-wrap'>
                            <Routes>
                                <Route
                                    path="/"
                                    element={
                                        <>
                                            <ItemListContainerPS5 />
                                        </>
                                    }
                                />
                                <Route path="/ps5" element={<ItemListContainerPS5 />} />
                                <Route path="/xbox" element={<ItemListContainerXbox />} />
                                <Route path="/productPS5/:id" element={<ItemDetailPS5 />} />
                                <Route path="/productXbox/:id" element={<ItemDetailXbox />} />
                                <Route path="/cart" element={<Cart />} />
                            </Routes>
                        </div>
                    </div>
                    <Footer />
                </CartProvider>
            </BrowserRouter>
        </div>
    );
};

export default App;
