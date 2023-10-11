// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUES7lFmo4DQruAyjxETfAvzk1etfR0ls",
  authDomain: "loginauth-7ecdc.firebaseapp.com",
  projectId: "loginauth-7ecdc",
  storageBucket: "loginauth-7ecdc.appspot.com",
  messagingSenderId: "258796423758",
  appId: "1:258796423758:web:e34559ca084b34bf0d511f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
