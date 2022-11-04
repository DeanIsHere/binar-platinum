import { set, ref, push, onValue, query } from "firebase/database";
import { database } from "../config/firebase";

const db = database
// WRITE
export const seederGame = () => {
    insertGame(
        "Rock Paper Scissors Online",
        "Rock Paper Scissors is a traditional game from japane",
        "https://img.freepik.com/premium-vector/hands-playing-rock-paper-scissors-game-flat-design-style-vector-illustration_540284-598.jpg?w=2000",
        ""
    )
    insertGame(
        "Space War",
        "Kill your enemies and survive as long as possible in space to get the highest score",
        "https://tresreisgames.in/images/banner1.jpg",
        "/game/spacewar"
    )

    insertSlideshow(
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1656615305",
        "Red dead Redemption II"
    )

    insertSlideshow(
        "https://i.pinimg.com/originals/de/d2/bd/ded2bdf1df65f09413823cd15d0ca6b2.jpg",
        "Cyberpunk 2077"
    )
}
export const insertGame = (game_title, game_description, game_image, game_url) => {
    const dbRef = ref(db, 'game_info')
    const data = {
        game_title,
        game_description,
        game_image,
        game_url
    }
    push(dbRef, data)
}

export const insertSlideshow = (hs_image, hs_title) => {
    const dbRef = ref(db, 'home_slideshow')
    const data = {
        hs_image,
        hs_title,
    }
    push(dbRef, data)
}


export const insertGameScore = (game_id, id_player, score) => {
    const today = new Date()
    const time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()

    const dbRef = ref(db, 'game_score')
    const data = {
        id_player,
        game_id,
        score,
        time
    }
    push(dbRef, data)
}

// UPDATE
export const updateGame = (game_id, game_title, game_description, game_image, game_url) => {
    const dbRef = ref(db, `game_info/${game_id}`)
    const data = {
        game_title,
        game_description,
        game_image,
        game_url
    }
    push(dbRef, data)
}

// READ
export const retrieveAllGames = () => {
    return new Promise((resolve, reject) => {
        const dbRef = ref(db, 'game_info')
        onValue(dbRef, (snapshot) => {
            const value = []
            Object.keys(snapshot.val()).map(key => {
                value.push({
                    id: key,
                    data: snapshot.val()[key]
                })
            })
            // resolve(value)
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