// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { setActiveScreen} from "./view/index";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFX0Ep3DaDwf6wRm9-TS9SOz-C65rz4vM",
  authDomain: "chatpage-55681.firebaseapp.com",
  projectId: "chatpage-55681",
  storageBucket: "chatpage-55681.appspot.com",
  messagingSenderId: "70935988443",
  appId: "1:70935988443:web:0a11ee1656b14264f4e4fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
// if()
setActiveScreen('loginpage');

// loginpage
// registerpage
// resetPasswordpage
// chatpage