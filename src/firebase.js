import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: 'AIzaSyCF9o7l_RxqHWXirNrkBs1twPtAKviOImw',
    authDomain: 'pro-portfolio-8ced1.firebaseapp.com',
    projectId: 'pro-portfolio-8ced1',
    storageBucket: 'pro-portfolio-8ced1.appspot.com',
    messagingSenderId: '544161017075',
    appId: '1:544161017075:web:e1fdc753127a9453f09b86',
    measurementId: 'G-8WMEZCDYYM',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);
