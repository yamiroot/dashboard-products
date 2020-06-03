import * as firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCXEXa1Eo8eaIhqOFkQggHWP7JxPxlsErw",
    authDomain: "dashboard-products.firebaseapp.com",
    databaseURL: "https://dashboard-products.firebaseio.com",
    projectId: "dashboard-products",
    storageBucket: "dashboard-products.appspot.com",
    messagingSenderId: "319224676168",
    appId: "1:319224676168:web:48e48dade26cf9556d3d7d"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);



export const auth = firebase.auth();
export const firestore = firebase.firestore();

