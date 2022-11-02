import React from "react";
import { Card, Container } from "react-bootstrap";
// import UserProfilePhoto from "../../assets/images/user-profile-photo.png";
import "./GameDetailHeader.css";


const GameDetailHeader = ({ user }) => {
    console.log(user);
  
    const editHandler = () => {};
    return (
    <div>
      <section className="section-profile__header d-flex">
        <Card
          className="d-flex flex-row"
          style={{ backgroundColor: "#3B3838", width: "100%", border: "none" }}
        >
          {/* Profile Header Left*/}
          <Card.Img
            className="profile-header__left--img"
            src='https://pbs.twimg.com/media/EYNdenzVAAAuZKe.jpg'
            // alt="user profile"
          />
          <div className="d-flex flex-column w-100">
            {/* Profile Header Right */}
            {/* Profile Header Right Top */}
            <Card.Header className="profile-header__rt">
              <div>
                <Card.Title className="profile-header__rt--title">
                  SPACE WARS
                </Card.Title>
              </div>
  
              <div>
                <Card.Title className="profile-header__rb--title">
                  209
                </Card.Title>
                <Card.Text className="profile-header__rb--text">
                  PLAYERS
                </Card.Text>
              </div>
            </Card.Header>
            <Card.Body style={{ padding: "0" }}>
              {/* Profile Header Right Bottom  */}
              <div className="profile-header__rb">
                <div>
                  <Card.Text className="profile-header__rb--text">
                    Game Tembak Tembakan Tapi Pake Pesawat Elon Musk
                  </Card.Text>
                </div>
                <button className="btn-edit__profile" href='#'>
                  PlayGame
                </button>
              </div>
            </Card.Body>
          </div>
        </Card>
      </section>
      
      <section>

      </section>
    
    </div>
    );
  };
  
  export default GameDetailHeader;