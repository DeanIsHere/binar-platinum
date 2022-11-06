import { set, ref, push, onValue, update } from "firebase/database";
import { database} from "../config/firebase";

const db = database

//write biodata

export const CreateUser = (name,username,email) =>{
    const dbRef = ref(db,`game_user`)
    const data = {
        name,
        username,
        email, //nanti ambil dari auth via decode jwt
        total_score:0,
        city: null,
        social_media: null,
        profile_picture: null
    }
    push(dbRef, data)
}

//read one biodata
export const getUserById = (id) => {
    return new Promise((resolve, reject) => {
      const dbRef = ref(db, `game_user/${id}`)
      onValue(dbRef, (data) => {
        const value = data.val()
        resolve(value)
      })
    })
  }

//edit profile
export const updateProfile = (id, name,username, city, social_media) => {
    const dbRef = ref(db, `game_user/${id}`)
    const data = {
        name,
        username,
        city,
        social_media
    }
    update(dbRef, data)
  }

//update score
export const updateScore = (id, total_score) => {
    const dbRef = ref(db, `game_user/${id}`)
    const data = {
        total_score
    }
    update(dbRef, data)
  }

//update profile photo
export const updateProfileImg = (id, profile_picture) => {
    const dbRef = ref(db, `game_user/${id}`)
    const data = {
        profile_picture
    }
    update(dbRef, data)
  }
//get game info
export const getGameInfoById = (id) => {
  return new Promise((resolve, reject) => {
    const dbRef = ref(db, `game_info/${id}`)
    onValue(dbRef, (data) => {
      const value = data.val()
      resolve(value)
    })
  })
}
//total point

//game history

//leaderboard pergame

//jumlah user yang bermain pergame 