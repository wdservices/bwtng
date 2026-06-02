import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

export const firebaseConfig = {
  apiKey: "AIzaSyBADY5IFU1Q5xblJrgHKUo6CioJwcKzzk0",
  authDomain: "wavesds.firebaseapp.com",
  projectId: "wavesds",
  storageBucket: "wavesds.appspot.com",
  messagingSenderId: "901876500235",
  appId: "1:901876500235:web:45334c4bcc426436b4040e"
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
