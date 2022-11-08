import React from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { countPlayerByGame, getGameInfoById } from "../../action/fb_database";
import "./GameDetailHeader.css";
import { useState } from "react";
import { useEffect } from "react";


const GameDetailHeader = () => {
    const {id} = useParams()
    const [gameDetail, setgameDetail] = useState({
      game_description: "loading...",
      game_image: "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg",
      game_title: "loading...",
      game_url: "loading..."
    })
    const [totalUser, settotalUser] = useState('loading...')
    const getGameDetail = async () =>{
      const resp = await getGameInfoById(id)
      setgameDetail(resp)
    }
    const countUser = async() =>{
      const resp = await countPlayerByGame(id)
      settotalUser(resp)
    }
    useEffect(() => {
      getGameDetail()
      countUser()
    },[totalUser])

    return (
    <div>
      <section className="section-detail__header d-flex">
        <Card
          className="d-flex flex-row"
          style={{ backgroundColor: "#3B3838", width: "100%", border: "none" }}>

          <Card.Img
            className="detail-header__left--img"
            src={gameDetail.game_image}

          />
          <div className="d-flex flex-column w-100">
            <Card.Header className="detail-header__rt">
              <div>
                <Card.Title className="detail-header__rt--title">
                  {gameDetail.game_title}
                </Card.Title>
              </div>
  
              <div>
                <Card.Title className="detail-header__rb--title">
                  {totalUser}
                </Card.Title>
                <Card.Text className="detail-header__rb--text">
                  PLAYERS
                </Card.Text>
              </div>
            </Card.Header>
            <Card.Body style={{ padding: "0" }}>
              
              <div className="detail-header__rb">
                <div>
                  <Card.Text className="detail-header__rb--text">
                  {gameDetail.game_description}
                  </Card.Text>
                </div>
                <a className="btn-edit__detail btn" href={gameDetail.game_url}>
                  PlayGame
                </a>
              </div>
            </Card.Body>
          </div>
        </Card>
      </section>
    </div>
    );
  };
  
  export default GameDetailHeader;