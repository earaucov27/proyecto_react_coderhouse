import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer-general' id="main-container">
            <footer className="footer-container content-wrap">
                <h5>Contacto</h5>
                <p>3dpixels@gmail.com | Tel: 9-8973729</p>

                <div>
                    <Link to="#"><FaFacebook className="footer-icons" /></Link>
                    <Link to="#"><FaTwitter className="footer-icons" /></Link>
                    <Link to="#"><FaInstagram className="footer-icons" /></Link>
                </div>

                <div>
                    <Link to="/ps5" className="footer-links">PS5</Link> |
                    <Link to="/xbox" className="footer-links"> Xbox</Link>
                </div>
            </footer>

            <div className="footer-bottom">
                <small>3D Pixels - Todos los derechos reservados 2024</small>
            </div>
        </div>
    );
};

export default Footer;
