
// Import the Firebase SDK
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBL5ij_rSoiQBNF8FvnKyz-Xpb3ggT2Gds",
    authDomain: "agrimachinerycrm-backend.firebaseapp.com",
    databaseURL: "https://agrimachinerycrm-backend-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "agrimachinerycrm-backend",
    storageBucket: "agrimachinerycrm-backend.appspot.com",
    messagingSenderId: "84269346781",
    appId: "1:84269346781:web:6c724db7a7102b03959034",
    measurementId: "G-XXWEBHB4QP"
  };

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore, Auth, and Storage services
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

// Export the Firebase services for use in your app
export { db, auth, storage };