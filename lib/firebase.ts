import { initializeApp, getApps } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, initializeFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB5tfdeMZr_127avJHs8YXYRoRgL9YKgmQ",
  authDomain: "doctor-c59b9.firebaseapp.com",
  projectId: "doctor-c59b9",
  storageBucket: "doctor-c59b9.appspot.com",
  messagingSenderId: "20278408202",
  appId: "1:20278408202:web:aec18c51204879a17c9bf3"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  
  // Initialize Firestore with settings to avoid browser warning
  initializeFirestore(app, {
    ignoreUndefinedProperties: true,
  });
} else {
  app = getApps()[0];
}

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };