// === Firebase Core === //
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// === Your Firebase Config === //
export const firebaseConfig = {
  apiKey: "AIzaSyBrKETDiJ2CzvlMwC8A26UaLhz5Ak-JkPc",
  authDomain: "oikos-dubai.firebaseapp.com",
  projectId: "oikos-dubai",
  storageBucket: "oikos-dubai.firebasestorage.app",
  messagingSenderId: "209046236408",
  appId: "1:209046236408:web:05cef6679f442a91449f0d"
};

// === Initialize Firebase === //
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
