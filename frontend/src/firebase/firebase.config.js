// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"
// import { getAuth } from "firebase/auth";



// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
//   // measurementId: import.meta.env.VITE_measurementId
// };

// // Initialize Firebase
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth =  getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyDZIs9EyCM8lm-N25SA1D7N9Uz_8_xUk6o",
  authDomain: "booking-web-app-578f1.firebaseapp.com",
  projectId: "booking-web-app-578f1",
  storageBucket: "booking-web-app-578f1.firebasestorage.app",
  messagingSenderId: "546644248968",
  appId: "1:546644248968:web:c17a86bfa45b8e9175d23d",
  measurementId: "G-2MDBVF8LCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =  getAuth(app);