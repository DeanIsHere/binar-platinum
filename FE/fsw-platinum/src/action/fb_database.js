import { set, ref, push, onValue } from "firebase/database";
import { database, storage} from "../config/firebase";
import { getDownloadURL, ref as storageRef, uploadBytes } from "firebase/storage"

const db = database

//write biodata

export const CreateUser = (name,username,email) =>{
    const dbRef = ref(db,'game_user')
    const data = {
        name,
        username,
        email //nanti ambil dari auth via decode jwt
    }
    push(dbRef, data)
}

