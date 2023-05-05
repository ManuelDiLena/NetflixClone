import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD6qqCbGZgTlgXl7JUyyXYbkFr1FSuHwcw",
    authDomain: "netflix-clone-c81ad.firebaseapp.com",
    projectId: "netflix-clone-c81ad",
    storageBucket: "netflix-clone-c81ad.appspot.com",
    messagingSenderId: "30190832306",
    appId: "1:30190832306:web:0bf21172e49f1ffd7517ab"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebaseApp.auth();

  export { auth };