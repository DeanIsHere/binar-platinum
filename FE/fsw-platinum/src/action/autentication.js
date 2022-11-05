import { authFirebase } from "../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export const checkDataLogin = async (setIsLogin, setDataUser = () => { }) => {
    const uuid = await localStorage.getItem('UID');
    if (uuid == null) {
        setIsLogin(false)
    } else {
        setIsLogin(true)
        onAuthStateChanged(authFirebase, (user) => {
            if (user) {
                setDataUser(user)
            } else {
                setIsLogin(false)
            }
        })
    }
}

export const firebaseLogout = async () => {
    localStorage.setItem('jwt-token', null);
    localStorage.setItem('UID', null);
    signOut(authFirebase)
    console.log('Signed Out');

}