import logIn from '../firebase/auth';


export const signInOnSubmit = (event) => {
    event.preventDefault();
  
    const botonRegistro = event.target;
    const email = botonRegistro.closest('form').querySelector('input[type=email]');
    const password = botonRegistro.closest('form').querySelector('input[type=password]');
    const textEmail = botonRegistro.closest('form').querySelector('span[name=messageEmail]');
    const textPassword = botonRegistro.closest('form').querySelector('span[name=messagePassword]');
    console.log(email);
  
    if (email.value !== '' && password.value !== '') {
      logIn(email.value, password.value)
        .then(() => changeHash('/home'))
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
  
          if (errorCode === 'auth/invalid-email') {
            email.value = '';
            textPassword.value = '';
            textEmail.innerHTML = `
          <p style="font-size: 10px; margin: 3px; color: blue">El correo ingresado no es válido.</p>`;
          }
  
          if (errorCode === 'auth/user-disabled') {
            email.value = '';
            textPassword.value = '';
            textPassword.innerHTML = `
              <p style="font-size: 10px; margin: 3px; color: blue">El correo ingresado ha sido deshabilitado.</p>`;
            textPassword.value = '';
          }
  
          if (errorCode === 'auth/user-not-found') {
            email.value = '';
            textPassword.value = '';
            textEmail.innerHTML = `
              <p style="font-size: 10px; margin: 3px; color: blue; float: center">El correo ingresado no pertenece a ningún<br> usuario.</p>`;
          }
  
          if (errorCode === 'auth/wrong-password') {
            password.value = '';
            textEmail.value = '';
            textPassword.innerHTML = `
              <p style="font-size: 10px; margin: 3px; color: blue">La contraseña ingresada es incorrecta.</p>`;
          }
  
          return errorMessage;
        });
    } else if (email.value === '' && password.value !== '') {
      textPassword.value = '';
      textEmail.innerHTML = `
        <p style="font-size: 10px; margin: 3px; color: blue; float: center">Por favor, ingrese una dirección de correo<br> electrónico.</p>`;
    } else if (email.value !== '' && password.value === '') {
      password.value = '';
      textEmail.value = '';
      textPassword.innerHTML = `
        <p style="font-size: 10px; margin: 3px; color: blue">Por favor, ingrese una contraseña.</p>`;
    } else {
      textEmail.innerHTML = `
        <p style="font-size: 10px; margin: 3px; color: blue; float: center">Por favor, ingrese una dirección de correo<br> electrónico.</p>`;
      textPassword.innerHTML = `
        <p style="font-size: 10px; margin: 3px; color: blue">Por favor, ingrese una contraseña.</p>`;
    }
  };
  