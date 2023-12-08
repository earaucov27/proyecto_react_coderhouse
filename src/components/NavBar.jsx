// NavBar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div class='container'>
                <a className="navbar-brand" href="#">3DPixels</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Juegos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Acerca de</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
