import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCd0CbD7GIMIyejbd2jhy_W5C-4Li79Z3Y',
  authDomain: 'movie-store-89b58.firebaseapp.com',
  projectId: 'movie-store-89b58',
  storageBucket: 'movie-store-89b58.appspot.com',
  messagingSenderId: '588376133892',
  appId: '1:588376133892:web:c8a72e4387ebfc45168051',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const db = firebase.firestore();

export { auth, provider, db };
