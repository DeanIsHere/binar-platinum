import { Component } from "react";
import { Form, Container, Card, CardGroup, Row, Col } from 'react-bootstrap';
import { authFirebase, database } from "../config/firebase"

import '../assets/pages/home/styles.css';
import '../assets/pages/home/scripts.js';

import logo from '../assets/images/echamp-white.png'
import btnSlide from '../assets/images/scroll_down.svg'
import GameCard from '../components/home/game_card'
import Slideshow from '../components/home/slideshow'
import Footer from "../components/layout/footer/Footer";
import { retrieveAllGames, retrieveAllSlideshow } from "../action/games";


class Home extends Component {
  state = {
    gameSearch: "",
    gameList: [],
    slideshow: []
  }

  handleSearchGame = async (event) => {
    await this.setState(data => ({
      gameSearch: event.target.value
    }))
    this.componentDidMount()
  }

  async componentDidMount() {
    const data_game = await retrieveAllGames()
    const data_slideshow = await retrieveAllSlideshow()
    this.setState({
      gameList: data_game,
      slideshow: data_slideshow,
    })
  }

  render() {
    return (
      <div style={{ backgroundColor: '#2B2D33', color: '#fff' }}>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand" href="#page-top"><img src={logo} /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars ms-1"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ms-5 py-4 py-lg-0">
                <li className="nav-item"><a className="nav-link" href="#">HOME</a></li>
                <li className="nav-item"><a className="nav-link" href="#game">GAME</a></li>
                <li className="nav-item"><a className="nav-link" href="#leaderboard">LEADERBOARD</a></li>
              </ul>
              <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li className="nav-item"><a className="nav-link" href="#">LOGIN</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="" style={style.header}>
          <div className="container">
            <div className="masthead-subheading" style={{ fontSize: 25 }}><b>FIND YOUR FAVORITE GAME</b></div>
            <div className="masthead-heading text-uppercase" style={{ fontSize: 60 }}><b>PLAY ONLINE</b></div>
          </div>
        </header >

        <Container>

          <center>
            <div style={style.header_card}>
              <h2>ABOUT</h2>
              <span>ini adalah tempat tulisan detail tentang website ini adalah tempat tulisan detail tentang website ini adalah tempat tulisan detail tentang website ini adalah tempat tulisan detail tentang website ini adalah tempat tulisan detail tentang website </span>
            </div>
          </center>

          <section className="page-section " id="game">
            <center>
              <div className="col-lg-9 col-sm-12">

                <Slideshow data={this.state.slideshow} />

                <Row xs={1} md={3} className="g-4 text-dark" >
                  <Col></Col>
                  <Col></Col>
                  <Col>
                    <Form>
                      <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Search Game" value={this.state.gameSearch} onChange={this.handleSearchGame} />
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>

                <Row xs={1} md={1} className="g-4 py-3" >
                  {
                    this.state.gameList.map((data) => (
                      <GameCard key={data.id} title={data.data.title} description={data.data.description} image={data.data.image} url={data.data.url} />
                    ))
                  }
                </Row>

              </div>
            </center>

          </section>
        </Container>
        <section className="page-section  py-5" style={style.section_leaderboard} id="leaderboard">
          <h3 className='text-center'>LEADER BOARD</h3>

        </section>
        <Footer />

      </div >
    )
  }
}


var style = {
  header: {
    backgroundImage: "url(https://echamp.id/assets/img/header-bg.jpg)",
    paddingTop: 250,
    paddingBottom: 200,
    textAlign: 'center',
    color: '#fff',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    fontFamily: 'Inter',
    fontStyle: 'normal',
  },
  header_card: {
    backgroundColor: '#3E4552',
    maxWidth: 800,
    padding: 50,
    borderRadius: 20,
    top: -80,
    position: 'relative'
  },
  slideshow: {
    height: 400
  },
  section_leaderboard: {
    backgroundColor: '#353637',
  }
};


export default Home