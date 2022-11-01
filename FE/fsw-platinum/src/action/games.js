import { set, ref, push, onValue } from "firebase/database";
import { database } from "../config/firebase";

const db = database
// WRITE
export const insertGame = (title, description, image, url) => {
    const dbRef = ref(db, 'games')
    const data = {
        title,
        description,
        image,
        url
    }
    push(dbRef, data)
}


export const insertGameScore = (game_id, user_id, score) => {
    const today = new Date()
    const time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()

    const dbRef = ref(db, 'game_score')
    const data = {
        game_id,
        user_id,
        score,
        time
    }
    push(dbRef, data)
}

// UPDATE
export const updateGame = (id, title, description, image, url) => {
    const dbRef = ref(db, `games/${id}`)
    const data = {
        title,
        description,
        image,
        url
    }
    push(dbRef, data)
}

// READ
export const retrieveAllGames = () => {
    return new Promise((resolve, reject) => {
        const dbRef = ref(db, 'games')
        onValue(dbRef, (snapshot) => {
            const value = []
            Object.keys(snapshot.val()).map(key => {
                value.push({
                    id: key,
                    data: snapshot.val()[key]
                })
            })
            resolve(value)
        })
    })

}

export const retrieveAllSlideshow = () => {
    return new Promise((resolve, reject) => {
        const dbRef = ref(db, 'home_slideshow')
        onValue(dbRef, (snapshot) => {
            const value = []
            Object.keys(snapshot.val()).map(key => {
                value.push({
                    id: key,
                    data: snapshot.val()[key]
                })
            })
            resolve(value)
        })
    })

}