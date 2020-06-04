import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from '../firebase/auth';
import ImgLogo from '../assets/logotext.png';


const Header = () => {
    const signOutEvent = (event) => {
        event.preventDefault();

        signOut()
            .then(() => {
                window.location.hash = '/login';
                console.log('bays');
            }).catch((error) => {
                console.log(error);
            });
    };

    return (
        <header role="banner" className="Header" data-testid="header">
            <Link to="/dashboard">
                <img src={ImgLogo} alt="Logo de Dashboard Products" />
            </Link>
            <div className="btn-group div-button">
                <button type="button" className="btn btn-secondary dropdown-toggle button-opts" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Mi name
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                    <button className="dropdown-item" type="button" onClick={signOutEvent}>Cerrar sesión</button>
                </div>
            </div>
        </header>
    )
};


export default Header;
