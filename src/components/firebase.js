import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyASv891CinRU2T9_E8inF9F0jsqYdI8nvs",
    authDomain: "facebookchatclone.firebaseapp.com",
    projectId: "facebookchatclone",
    storageBucket: "facebookchatclone.appspot.com",
    messagingSenderId: "19276820953",
    appId: "1:19276820953:web:8461f9a95998ede09169c8"
}).auth();