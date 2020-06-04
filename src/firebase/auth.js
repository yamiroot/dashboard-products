import { auth } from '../firebase/firebase-config';


export const logIn = (email, password) => (
    auth.signInWithEmailAndPassword(email, password));


export const signOut = () => auth.signOut();
