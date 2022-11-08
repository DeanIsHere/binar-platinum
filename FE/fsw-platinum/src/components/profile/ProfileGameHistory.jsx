import React from "react";
import { useState, useEffect } from "react";
import { Card, Table } from "react-bootstrap";
import { getGameInfoById } from "../../action/fb_database";
import { retrieveAllGames } from "../../action/games";
import "./ProfileGameHistory.css";

const ProfileGameHistory = ({ userGameHistory, playerId }) => {
  const [gameUserById, setGameUserById] = useState({});
  useEffect(() => {
    async function initData() {
      let obj = {};
      const allGames = await retrieveAllGames();
      for (let val of allGames) {
        obj[val.id] = val.data.game_title;
      }

      setGameUserById(obj);
    }
    initData();
  }, []);

  return (
    <section className="section-profile__game--history">
      <Card
        style={{
          backgroundColor: "#3B3838",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          height: "100vh",
        }}
      >
        {/* ProfileGameHistory Top */}
        <div style={{ backgroundColor: "#464343" }}>
          <Card.Header className="profile-game__history--header">
            GAME HISTORY
          </Card.Header>
        </div>

        {/* ProfileGameHistory Bottom */}
        <Card.Body>
          <Table bordered variant="dark">
            <thead className="text-white">
              <tr>
                <th>No</th>
                <th>Game</th>
                <th>Game Time</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {userGameHistory?.map((user, i) => {
                return (
                  <tr key={i + 1}>
                    <td>{i + 1}</td>
                    <td>{gameUserById[user?.data?.game_id]}</td>
                    <td>{user?.data?.time}</td>
                    <td>{user?.data?.score}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </section>
  );
};

export default ProfileGameHistory;
