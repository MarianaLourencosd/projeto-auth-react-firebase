import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
   apiKey: "AIzaSyBW4HwzZVNlguuVh-SaJSGKhdYyS46obcU",
    authDomain: "auth-react-app-10cf3.firebaseapp.com",
    projectId: "auth-react-app-10cf3",
    storageBucket: "auth-react-app-10cf3.firebasestorage.app",
    messagingSenderId: "1049332377258",
    appId: "1:1049332377258:web:e2dda94ab6e9fc94f612d3"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);