import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logIn } from '../firebase/auth';
import ImgLogo from '../assets/logotext.png';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailText, setEmailText] = useState('No compartiremos su correo electrónico con nadie más.');
    const [passwordText, setPasswordText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        logIn(email, password)
            .then((event) => {
                event.preventDefault();
                console.log('Successful Log In');
            })
            .catch((error) => {
                console.log('errror');
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode === 'auth/invalid-email') {
                    setEmail('');
                    setPassword('');
                    
                    setEmailText('El correo ingresado no es válido.');
                }

                if (errorCode === 'auth/user-disabled') {
                    setEmail('');
                    setPassword('');
                    
                    setEmailText('El correo ingresado ha sido deshabilitado.');
                }

                if (errorCode === 'auth/user-not-found') {
                    setEmail('');
                    setPassword('');
                    
                    setEmailText('El correo ingresado no pertenece a ningún usuario.');
                }

                if (errorCode === 'auth/wrong-password') {
                    setEmail('');
                    setPassword('');
                    
                    setPasswordText('La contraseña ingresada es incorrecta.');
                }

                return errorMessage;
            });
    };


return (
    <div data-testid="view-login">
        <section className="Form">
            <img src={ImgLogo} alt="Logo de Dashboard Products" />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email:</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(event) => setEmail(event.target.value)} />
                    <p id="emailHelp" ><small className="form-text text-muted">{emailText}</small></p>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Contraseña:</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(event) => setPassword(event.target.value)} />
                    <p id="passwordHelp"><small className="form-text text-muted">{passwordText}</small></p>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Recordar contraseña</label>
                </div>
                <Link to="/dashboard"><button type="submit" className="btn btn-primary">Iniciar sesión</button></Link>
            </form>
        </section>
    </div>
);
};


export default Login;
