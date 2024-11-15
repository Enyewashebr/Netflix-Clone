
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_4Coyo9DuYr0tyrtF9ntS9jeOjxg8yTk",
  authDomain: "netflix-clone-b4fb7.firebaseapp.com",
  projectId: "netflix-clone-b4fb7",
  storageBucket: "netflix-clone-b4fb7.firebasestorage.app",
  messagingSenderId: "845686742672",
  appId: "1:845686742672:web:39176f7580c146277d0215",
};


const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const db = getFirestore(app)

const signup = async (name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        await addDoc{collection(db, 'user', {
            uid:user.uid,
            name,
            authProvider:'local',
            email,
        })}
    } catch (error) {
        console.log(error);
        alert(error)
    }
}
const login = async (email, password)=>{
try {
   await signInWithEmailAndPassword(auth, email, password)
} catch (error) {
    console.log(error);
    alert(error);
}
}
const logout = async ()=>{
    signOut(auth);
}
export {auth, db, login, signup, logout}
