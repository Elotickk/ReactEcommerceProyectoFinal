import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyD52QIr0d-RIEPExqE3yagJzvYCRcleKFo",
  authDomain: "e-commerce-react-9baab.firebaseapp.com",
  projectId: "e-commerce-react-9baab",
  storageBucket: "e-commerce-react-9baab.appspot.com",
  messagingSenderId: "198020759341",
  appId: "1:198020759341:web:863c297e3ed7c2489c9da4"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);