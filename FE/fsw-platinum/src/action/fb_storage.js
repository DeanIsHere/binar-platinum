import { storage } from "../config/firebase";
import { getDownloadURL, ref as storageRef, uploadBytes } from "firebase/storage"

export const uploadProfileImg = async (fileObject) => {
    const imgRef = storageRef(storage, `profile_img/${fileObject.name}`)
    const snapshot = await uploadBytes(imgRef, fileObject)
    const url = await getDownloadURL(imgRef)
    console.log(url)
    return url
  }