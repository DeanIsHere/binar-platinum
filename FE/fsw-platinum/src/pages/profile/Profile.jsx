import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getUserById } from "../../action/fb_database";
import Footer from "../../components/layout/footer/Footer";
import Navbar from "../../components/layout/nav/Navbar";
import ProfileGameHistory from "../../components/profile/ProfileGameHistory";
import ProfileHeader from "../../components/profile/ProfileHeader";
const Profile = () => {
  const [userData, setUserData] = useState({
    id: "1",
    playerName: "ELON MUSK22",
    username: "ELON MUSK",
    totalGame: "12",
    totalPoint: "125",
    playerRank: "1.342",
  });
  const { id: playerId } = useParams();
  console.log(playerId);
  useEffect(() => {
    async function initData() {
      const userDataById = await getUserById(playerId);
      console.log(userDataById);
    }
    initData();
  }, [playerId]);

  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <Navbar bgColor="#4A4A5C" />
        <main
          className="min-vh-100"
          style={{ backgroundColor: "#201C1C", paddingBottom: "2.875rem" }}
        >
          {/* Section Top*/}
          <article
            style={{ maxWidth: "1024px", margin: "auto", padding: "9rem 0rem" }}
          >
            <Container>
              <ProfileHeader user={userData} />
            </Container>
          </article>

          {/* Section Bottom */}
          <article style={{ maxWidth: "1024px", margin: "auto" }}>
            <Container>
              <ProfileGameHistory user={userData} />
            </Container>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Profile;
