import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./ProfileHeader.css";

const ProfileHeader = ({ user, totalGame, totalPoint, playerRankByUser }) => {
  let navigate = useNavigate();
  const editHandler = () => {
    navigate(`/edit_profile/${user?.data?.id_player}`);
  };

  const socialMediaHandler = () => {
    navigate(`/${user.social_media}`);
  };

  return (
    <section className="section-profile__header d-flex">
      <Card
        className="d-flex flex-row"
        style={{ backgroundColor: "#3B3838", width: "100%", border: "none" }}
      >
        {/* Profile Header Left*/}
        <Card.Img
          className="profile-header__left--img"
          src={user?.data?.profile_picture}
          alt="user profile"
        />
        <div className="d-flex flex-column w-100">
          {/* Profile Header Right */}
          {/* Profile Header Right Top */}
          <Card.Header className="profile-header__rt">
            <div>
              <Card.Title className="profile-header__rt--title">
                {user?.data?.name}
              </Card.Title>
              <Card.Text className="profile-header__rt--text">
                {user?.data?.username}
              </Card.Text>
              <Card.Text className="profile-header__rt--text">
                {user?.data?.city}
              </Card.Text>
            </div>

            <div className="d-flex flex-column">
              <button className="btn-edit__profile mb-2" onClick={editHandler}>
                EDIT PROFILE
              </button>
              <button
                className="btn-edit__profile"
                onClick={socialMediaHandler}
              >
                SOCIAL MEDIA
              </button>
            </div>
          </Card.Header>
          <Card.Body style={{ padding: "0" }}>
            {/* Profile Header Right Bottom  */}
            <div className="profile-header__rb">
              <div>
                <Card.Title className="profile-header__rb--title">
                  {totalGame}
                </Card.Title>
                <Card.Text className="profile-header__rb--text">
                  TOTAL GAME
                </Card.Text>
              </div>
              <div>
                <Card.Title className="profile-header__rb--title">
                  {totalPoint}
                </Card.Title>
                <Card.Text className="profile-header__rb--text">
                  TOTAL POINT
                </Card.Text>
              </div>
              <div>
                <Card.Title className="profile-header__rb--title">
                  {playerRankByUser}
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

export default ProfileHeader;
