import { async } from "@firebase/util";
import { set, ref, push, onValue, update } from "firebase/database";
import { database} from "../config/firebase";

const db = database;

//write biodata

export const registerUser= (id_player,name,username,email) =>{
    const dbRef = ref(db,`game_user`)
    const data = {
        id_player, //isinya UID
        name,
        username,
        email, //isinya email
        total_score:0,
        city: "null",
        social_media: "null",
        profile_picture: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/e1fd5442419075.57cc3f77ed8c7.png",
        total_game: 0,
        player_rank: 0
    }
    push(dbRef, data)
}
// get all user
export const retrieveAllUser = () => {
  return new Promise((resolve, reject) => {
    const dbRef = ref(db, 'game_user')
    onValue(dbRef, (snapshot) => {
      const value = []
      // Ubah Object ke Array of Object
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

// get game score
export const retrieveAllScore = () => {
  return new Promise((resolve, reject) => {
    const dbRef = ref(db, 'game_score')
    onValue(dbRef, (snapshot) => {
      const value = []
      // Ubah Object ke Array of Object
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
//read one biodata
export const getUserById = async(id) => {
    const selected = []
    const resp = await retrieveAllUser()
    resp.forEach(e => {
      if (e.data.id_player == id ){
        selected.push(e)
      }
    });

    return selected
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
export const totalPointByUser = async (id) => {
  let store = []
  let point = 0
    const scoreAll = await retrieveAllScore()
    scoreAll.forEach(e=> {
      if (e.data.id_player == id ){
        store.push(e)
      }
    });
    store.forEach(e => {
      point = point + e.data.score
    });
    const id_generate = await getUserById('eBYz2e1XsPeQjiKFi3PQ9QB1jGm2')
    await updateScore(id_generate[0].id,point)
    
    return point
}
//game history
export const historyByUser = async (id) => {
    let store = []
    const scoreAll = await retrieveAllScore()
    scoreAll.forEach(e=> {
      if (e.data.id_player == id ){
        store.push(e.id)
      }
    });
    const player = await getUserById(id)
    
    return player
}
//leaderboard pergame BELUM
export const leaderBoardByGame = async (id) => {
  let score = []
  const scoreAll = await retrieveAllScore()
    scoreAll.forEach(e=> {
      if (e.data.game_id == id ){
        score.push(e.id)
      }
    });
  
    return score
}
//jumlah user yang bermain pergame 
export const countPlayerByGame = async (id) => {
  let counter = 0
  let player = []
  let game_player = []
  const scoreAll = await retrieveAllScore()
  scoreAll.forEach(e=> {
    if (e.data.game_id == id ){
      player.push(e)
    }
  });
  player.forEach(e => {
    if (game_player.includes(e.data.id_player) === false){
      game_player.push(e.data.id_player)
      counter = counter+1
    }
  });
  return counter
}
// player rank BELUM
export const playerRank = async (id) =>{
  let rank_sorted = []
  const scoreAll = await retrieveAllScore()
}
// total game per user BELUM
export const totalGameByUser = async (id) =>{
  let game_list = []
  let temp = []
    const scoreAll = await retrieveAllScore()
    scoreAll.forEach(e=> {
      if (e.data.id_player == id ){
        temp.push(e)
      }
    });
    temp.forEach(e => {
      if (game_list.includes(e.data.game_id)=== false){
        game_list.push(e.data.game_id)
      }
    });
    
    return game_list.length
}


