import React from 'react';
import ImgError from '../assets/error.png';


const PageError = () => (
  <div data-testid="view-error">
    <main role="main" className="PageError">
      <img src={ImgError} alt="Error 404" />
      <section role="document">
        <h1>404</h1>
        <p className="text-center">El servidor no pudo encontrar el contenido solicitado.</p>
      </section>
    </main>
  </div>
);


export default PageError;
