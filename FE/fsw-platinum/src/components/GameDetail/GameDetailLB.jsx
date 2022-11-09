import React from "react";
import { Card, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./GameDetailLB.css";
import { useState } from "react";
import { useEffect } from "react";
import { leaderBoardByGame, retrieveAllUser } from "../../action/fb_database";
import LBCardGame from "./LBCardGame";

const GameDetailLB = () => {
  const { id } = useParams();
  const [LeaderBoard, setLeaderBoard] = useState([]);
  const [Player, setPlayer] = useState({});
  const [ProfilePic, setProfilePic] = useState({});
  const playerHandler = async () => {
    const temp = {};
    const resp = await retrieveAllUser();
    resp.forEach((e) => {
      temp[e.data.id_player] = e.data.username;
    });
    setPlayer(temp);
  };
  const profilePicHandler = async () => {
    const temp = {};
    const resp = await retrieveAllUser();
    resp.forEach((e) => {
      temp[e.data.id_player] = e.data.profile_picture;
    });
    setProfilePic(temp);
  };

  const boardHandler = async () => {
    const resp = await leaderBoardByGame(id);
    setLeaderBoard(resp);
  };

  useEffect(() => {
    boardHandler();
    playerHandler();
    profilePicHandler();
  }, []);
  return (
    <section className="section-detail__game--history">
      <Card
        style={{
          backgroundColor: "#3B3838",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          height: "100vh",
        }}
      >
        {/* Game Leader Board Top */}
        <div style={{ backgroundColor: "#464343" }}>
          <Card.Header className="detail-game__history--header">
            GAME RANK
          </Card.Header>
        </div>

        {/* Game Leader Board Bottom */}
        <Card.Body>
          {LeaderBoard.map((e, index) => (
            <LBCardGame
              key={index + 1}
              index={index + 1}
              username={Player[e.id_player]}
              score={e.score}
              profile_picture={ProfilePic[e.id_player]}
            />
          ))}
        </Card.Body>
      </Card>
    </section>
  );
};

export default GameDetailLB;