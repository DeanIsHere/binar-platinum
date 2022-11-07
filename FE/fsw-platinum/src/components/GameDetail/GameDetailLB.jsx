import React from "react";
import { Card, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./GameDetailLB.css";
import { useState } from "react";
import { useEffect } from "react";
import { getUserById, leaderBoardByGame, retrieveAllUser } from "../../action/fb_database";

const GameDetailLB = () => {
  const {id} = useParams()
  const [LeaderBoard, setLeaderBoard]= useState([])
  
  const boardHandler = async () =>{
    const resp = await leaderBoardByGame(id)
    setLeaderBoard(resp)
  }
  useEffect(()=>{
    boardHandler()
  },[])
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
          <Table  bordered variant="dark">
            <thead>
              <tr>
                <th>Rank</th>
                <th>User Name</th>
                <th>User ID</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {
               LeaderBoard.map((e, index)=>(
                  <tr>
                    <td>{index+1}</td>
                    <td>masih error</td>
                    <td>{e.id_player}</td>
                    <td>{e.score}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </section>
  );
};


export default GameDetailLB;
