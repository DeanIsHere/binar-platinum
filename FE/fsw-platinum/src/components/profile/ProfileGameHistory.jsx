import React from "react";
import { Card } from "react-bootstrap";
import "./ProfileGameHistory.css";

const ProfileGameHistory = () => {
  return (
    <section class="section-profile__game--history">
      <Card
        style={{
          backgroundColor: "#3B3838",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
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
        <Card.Body>{/* Game History */}</Card.Body>
      </Card>
    </section>
  );
};


export default ProfileGameHistory;
