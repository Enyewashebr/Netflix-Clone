import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "netflix-clone-by-enyew.firebaseapp.com",
  projectId: "netflix-clone-by-enyew",
  storageBucket: "netflix-clone-by-enyew.firebasestorage.app",
  messagingSenderId: "222954665037",
  appId: "1:222954665037:web:1f6ed92d1e75e817091804",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(
      collection(db, "user"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
        password,
      }
    );
  } catch (error) {
    console.log(error);
    // alert(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    // alert(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
};
const logout = async () => {
  await signOut(auth);
};
export { auth, db, login, signup, logout};
