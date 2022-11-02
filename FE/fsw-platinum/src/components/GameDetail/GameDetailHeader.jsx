import React from "react";
import { Card } from "react-bootstrap";
// import UserProfilePhoto from "../../assets/images/user-profile-photo.png";
import "./GameDetailHeader.css";


const GameDetailHeader = ({ user }) => {
    console.log(user);
  
    const editHandler = () => {};
    return (
      <section className="section-profile__header d-flex">
        <Card
          className="d-flex flex-row"
          style={{ backgroundColor: "#3B3838", width: "100%", border: "none" }}
        >
          {/* Profile Header Left*/}
          <Card.Img
            className="profile-header__left--img"
            src={UserProfilePhoto}
            alt="user profile"
          />
          <div className="d-flex flex-column w-100">
            {/* Profile Header Right */}
            {/* Profile Header Right Top */}
            <Card.Header className="profile-header__rt">
              <div>
                <Card.Title className="profile-header__rt--title">
                  {user.playerName}
                </Card.Title>
                <Card.Text className="profile-header__rt--text">
                  {user.username}
                </Card.Text>
              </div>
  
              <div>
                <button className="btn-edit__profile" onClick={editHandler}>
                  EDIT PROFILE
                </button>
              </div>
            </Card.Header>
            <Card.Body style={{ padding: "0" }}>
              {/* Profile Header Right Bottom  */}
              <div className="profile-header__rb">
                <div>
                  <Card.Title className="profile-header__rb--title">
                    {user.totalGame}
                  </Card.Title>
                  <Card.Text className="profile-header__rb--text">
                    TOTAL GAME
                  </Card.Text>
                </div>
                <div>
                  <Card.Title className="profile-header__rb--title">
                    {user.totalPoint}
                  </Card.Title>
                  <Card.Text className="profile-header__rb--text">
                    TOTAL POINT
                  </Card.Text>
                </div>
                <div>
                  <Card.Title className="profile-header__rb--title">
                    {user.playerRank}
                  </Card.Title>
                  <Card.Text className="profile-header__rb--text">
                    PLAYER RANK
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </div>
        </Card>
      </section>
    );
  };
  
  export default GameDetailHeader;