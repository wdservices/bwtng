import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBADY5IFU1Q5xblJrgHKUo6CioJwcKzzk0",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "wavesds.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "wavesds",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "wavesds.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "901876500235",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:901876500235:web:45334c4bcc426436b4040e"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
  ignoreUndefinedProperties: true,
});
export const storage = getStorage(app);

// Legacy compat exports
export const getFirebaseAuth = () => auth;
export const getFirebaseDb = () => db;
export const getFirebaseStorage = () => storage;

export default app;
