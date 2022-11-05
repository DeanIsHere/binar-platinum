import React from "react";
import { Card, Container } from "react-bootstrap";
import "./GameDetailHeader.css";


const GameDetailHeader = ({ user }) => {
    console.log(user);

    return (
    <div>
      <section className="section-detail__header d-flex">
        <Card
          className="d-flex flex-row"
          style={{ backgroundColor: "#3B3838", width: "100%", border: "none" }}>

          <Card.Img
            className="detail-header__left--img"
            src='https://pbs.twimg.com/media/EYNdenzVAAAuZKe.jpg'

          />
          <div className="d-flex flex-column w-100">
            <Card.Header className="detail-header__rt">
              <div>
                <Card.Title className="detail-header__rt--title">
                  SPACE WARS
                </Card.Title>
              </div>
  
              <div>
                <Card.Title className="detail-header__rb--title">
                  209
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
                    Game Tembak Tembakan Tapi Pake Pesawat Elon Musk
                  </Card.Text>
                </div>
                <button className="btn-edit__detail" href='#'>
                  PlayGame
                </button>
              </div>
            </Card.Body>
          </div>
        </Card>
      </section>
    </div>
    );
  };
  
  export default GameDetailHeader;