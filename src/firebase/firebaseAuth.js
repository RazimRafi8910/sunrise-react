import { auth } from './firebaseConfg';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const emailSignIn = async (email,password) => {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        return result.user;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const emailLogin = async (email, password)=>{
    try {
        let result = await signInWithEmailAndPassword(auth, email, password);
        return result.user;
    } catch (error) {
        console.log(error)
    }
}