import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA380X2wQQtYIG-A7NRqgZyRuh7YMKTMdQ",
  authDomain: "ollie-gaming.firebaseapp.com",
  projectId: "ollie-gaming",
  storageBucket: "ollie-gaming.appspot.com",
  messagingSenderId: "578177728906",
  appId: "1:578177728906:web:5578216d6832226c588873"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)