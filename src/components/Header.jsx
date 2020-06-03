import React from 'react';
import { Link } from 'react-router-dom';
import ImgLogo from '../assets/logotext.png';


const Header = () => (
    <header role="banner" className="Header" data-testid="header">
        <Link to="/">
            <img src={ImgLogo} alt="Logo de Dashboard Products" />
        </Link>
        <div class="btn-group">
            <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Mi name
            </button>
            <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button">Ver catálogo</button>
                <button class="dropdown-item" type="button">Cerrar sesión</button>
            </div>
        </div>
    </header>
);


export default Header;
