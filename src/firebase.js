

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCysVkJeJChqwIrwYNpZMK-jmSXPpV2_Hk",
    authDomain: "netflix-clone-6caa6.firebaseapp.com",
    projectId: "netflix-clone-6caa6",
    storageBucket: "netflix-clone-6caa6.appspot.com",
    messagingSenderId: "982496792848",
    appId: "1:982496792848:web:a165c79114ef3946525595"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { auth };

  export default db;
