import React from 'react';
import ImgLogo from '../assets/logotext.png';


const Login = () => (
    <div data-testid="view-login">
        <section className="Form">
            <img src={ImgLogo} alt="Logo de Dashboard Products" />
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email:</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" class="form-text text-muted">No compartiremos su correo electrónico con nadie más.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Contraseña:</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Recordar contraseña</label>
                </div>
                <button type="submit" class="btn btn-primary">Iniciar sesión</button>
            </form>
        </section>
    </div>
);


export default Login;
